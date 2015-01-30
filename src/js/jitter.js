"use strict";

const HOST = 'https://registration.mobilecentraleurope.com';
const REFRESH_TIMEOUT = 2000;

window.Jitter = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: true,
    LOG_VIEW_LOOKUPS: true,

    request: function (url, type, data) {
        var headers = {};
        if (Jitter.token) {
            headers.Token = Jitter.token;
        }
        return Ember.$.ajax({
            url: HOST + url,
            type: type,
            data: JSON.stringify(data),
            dataType: 'json',
            headers: headers
        });
    },

    parseRefreshResponse: function (response) {
        response.map(function (workshopInfo) {
            var workshop = Jitter.Workshop.store.findById('workshop', workshopInfo.workshop_id)
                .then(function (workshop) {
                    workshopInfo.sessions.map(function (session) {
                        workshop.set('session_' + session.number + '_attending', session.attending);
                        workshop.set('session_' + session.number + '_free_spots', session.free_spots);
                    });
                });
        });
    },

    refresh: function () {
        Jitter.request('/api/workshops/signups', 'GET')
            .then(function (response) {
                Jitter.parseRefreshResponse(response);
            })
            .always(function () {
                Ember.run.later(function () {
                    Jitter.refresh();
                }, REFRESH_TIMEOUT);
            });
    }
});

Jitter.Router.map(function () {
    this.route('authenticate', {path: ':authenticationToken'});
});

Jitter.Speaker = DS.Model.extend({
    name: DS.attr('string'),
    picture_url: DS.attr('string'),
    role: DS.attr('string'),
    bio: DS.attr('string'),
    twitter: DS.attr('string')
});

Jitter.Workshop = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    image_url: DS.attr('string'),
    tags: DS.attr('string'),
    session_0_attending: DS.attr('boolean', {defaultValue: false}),
    session_0_free_spots: DS.attr('number', {defaultValue: 0}),
    session_1_attending: DS.attr('boolean', {defaultValue: false}),
    session_1_free_spots: DS.attr('number', {defaultValue: 0}),
    speakers: DS.hasMany('speaker')
});

Jitter.IndexRoute = Ember.Route.extend({
    model: function () {
        Jitter.token = localStorage.getItem('token');
        return Ember.Object.create();
    },
    setupController: function (controller, model) {
        var store = this.store;
        var route = this;
        Jitter.request('/api/workshops/list', 'GET')
            .then(function (response) {
                var workshops = response.map(function (workshop) {
                    var w = store.createRecord('workshop', {
                        id: workshop.id,
                        name: workshop.name,
                        description: workshop.description,
                        image_url: workshop.image_url,
                        tags: workshop.tags
                    });
                    workshop.speakers.map(function (speaker) {
                        w.get('speakers').pushObject(store.createRecord('speaker', speaker));
                    });
                    return w;
                });
                route.controllerFor('workshops').set('model', workshops);
                Jitter.refresh();
            })
            .fail(function (error) {
                if (error.status === 401) {
                    alert('You are not authenticated. Please enter website address sent to you via email first.');
                }
            });
        controller.set('model', model);
        controller.set('userName', localStorage.getItem('userName'));
    }
});

Jitter.IndexController = Ember.Controller.extend({
    needs: ['workshops']
});

Jitter.IndexView = Ember.View.extend({
    didInsertElement: function () {
        FastClick.attach(document.body);
        $(document).foundation();
    }
});

Jitter.WorkshopsController = Ember.ArrayController.extend({
    itemController: 'workshop'
});

Jitter.WorkshopController = Ember.ObjectController.extend({
    needs: 'index',

    isAttending: function () {
        return this.get('session_0_attending') || this.get('session_1_attending');
    }.property('session_0_attending', 'session_1_attending'),

    signUpForbidden0: function () {
        return this.get('session_1_attending') || (this.get('session_0_free_spots') <= 0 && !this.get('session_0_attending'));
    }.property('session_0_free_spots', 'session_0_attending', 'session_1_attending'),

    signUpForbidden1: function () {
        return this.get('session_0_attending') || (this.get('session_1_free_spots') <= 0 && !this.get('session_1_attending'));
    }.property('session_1_free_spots', 'session_0_attending', 'session_1_attending'),

    speakerList: function () {
        return this.get('speakers').map(function (speaker) {
            return speaker.get('name');
        }).join(' & ');
    }.property(),

    openSpots: function () {
        return this.get('session_0_free_spots') && this.get('session_1_free_spots') === -1;
    }.property('session_0_free_spots', 'session_1_free_spots'),

    actions: {
        showInfo: function () {
            if ($('#modal').hasClass('open')) {
                return;
            }

            var controller = this;
            Jitter.Workshop.store.findById('workshop', this.get('id'))
                .then(function (workshop) {
                    controller.get('controllers.index').set('model.selectedWorkshop', workshop);
                    Ember.run.later(function () {
                        $('#modal').foundation('reveal', 'open');
                    }, 100);
                });
        },
        toggleSignUp: function (slotNumber) {
            var data = {
                workshop_id: this.get('id'),
                session_number: slotNumber,
                attending: !this.get('session_' + slotNumber + '_attending')
            };

            Jitter.request('/api/workshops/signups', 'POST', data)
                .then(function (response) {
                    Jitter.parseRefreshResponse(response);
                });
        }
    }
});

Jitter.AuthenticateRoute = Ember.Route.extend({
    model: function (params) {
        Jitter.token = params.authenticationToken;
        var route = this;
        Jitter.request('/api/workshops/authenticate?token=' + Jitter.token, 'GET')
            .then(function (response) {
                localStorage.setItem('token', params.authenticationToken);
                localStorage.setItem('userName', response.first_name + ' ' + response.last_name);
                route.transitionTo('index');
            })
            .fail(function (error) {
                console.log(error);
                localStorage.removeItem('token');
                Jitter.token = null;
                $('#modal').foundation('reveal', 'open');
            });
    }
});