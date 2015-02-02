Ember.TEMPLATES["authenticate"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("<div class=\"row\">\n    <div class=\"small-12 columns\">\n        <h1>Please wait while your account is being fetched...</h1>\n    </div>\n</div>\n\n<div id=\"modal\" class=\"reveal-modal\" data-reveal>\n    <h1>Oops...</h1>\n\n    <p>It seems you entered wrong address. Please enter the address from email or contact our team.</p>\n\n    <a class=\"close-reveal-modal\">&#215;</a>\n</div>");
  },"useData":true});

Ember.TEMPLATES["index"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("                    Hello ");
  stack1 = helpers._triageMustache.call(depth0, "userName", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("!\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  data.buffer.push("                    To authenticate go to link sent to you via email.\n");
  },"5":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("        <div class=\"row-wrapper\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("workshop.isAttending:attending")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n            <div class=\"row\">\n                <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showInfo", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">\n                    <div class=\"small-24 medium-18 large-18 columns workshop-meta\">\n                        <div class=\"small-6 medium-6 large-4 columns image-tags\">\n                            <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'src': ("workshop.image_url")
  },"hashTypes":{'src': "ID"},"hashContexts":{'src': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n");
  stack1 = helpers.each.call(depth0, "tag", "in", "workshop.tags", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("                        </div>\n                        <div class=\"small-18 medium-18 large-20 columns workshop-description\">\n                            <h6 class=\"workshop-speaker\">");
  stack1 = helpers._triageMustache.call(depth0, "workshop.speakerList", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</h6>\n                            <h6 class=\"workshop-name\">");
  stack1 = helpers._triageMustache.call(depth0, "workshop.name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</h6>\n");
  stack1 = helpers.each.call(depth0, "tag", "in", "workshop.tags", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(8, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("                        </div>\n                    </div>\n                </a>\n\n                <div class=\"small-24 medium-6 large-6 columns\">\n                    <div class=\"small-offset-6 small-18 medium-offset-0 medium-24 large-24 columns workshop-session\"  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("workshop.openSpots:no-register")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n                        <span class=\"no-attendance-info\">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "workshop.no_registration_text", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </span>\n                    </div>\n                    <div class=\"small-offset-6 small-9 medium-offset-0 medium-12 large-12 columns workshop-session\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("workshop.openSpots:no-register")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n");
  stack1 = helpers.unless.call(depth0, "workshop.registrationDisabledOnMorning", {"name":"unless","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(10, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("                    </div>\n                    <div class=\"small-9 medium-12 large-12 columns workshop-session\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("workshop.openSpots:no-register")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n");
  stack1 = helpers.unless.call(depth0, "workshop.registrationDisabledOnEvening", {"name":"unless","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(12, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("                    </div>\n                </div>\n            </div>\n        </div>\n");
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("                                <h6 class=\"workshop-tags-small\">");
  stack1 = helpers._triageMustache.call(depth0, "tag", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</h6>\n");
  return buffer;
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("                                <h6 class=\"workshop-tags-mediumup\">");
  stack1 = helpers._triageMustache.call(depth0, "tag", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</h6>\n");
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("                            <div class=\"session-times\">\n                                SESSION 1<br>\n                                10:00 - 14:00<br>\n                            </div>\n                            <div class=\"workshop-register\">\n                                <button class=\"tiny\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleSignUp", 0, {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","NUMBER"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'disabled': ("workshop.signUpForbidden0")
  },"hashTypes":{'disabled': "STRING"},"hashContexts":{'disabled': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("workshop.session_0_attending:success")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n                                </button>\n                            <span class=\"workshop-spots\">\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "workshop.session_0_free_spots", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </span>\n                            </div>\n");
  return buffer;
},"12":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("                            <div class=\"session-times\">\n                                SESSION 2<br>\n                                15:30 - 19:30<br>\n                            </div>\n                            <div class=\"workshop-register\">\n                                <button class=\"tiny\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleSignUp", 1, {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","NUMBER"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'disabled': ("workshop.signUpForbidden1")
  },"hashTypes":{'disabled': "STRING"},"hashContexts":{'disabled': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("workshop.session_1_attending:success")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n                                </button>\n                            <span class=\"workshop-spots\">\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "workshop.session_1_free_spots", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </span>\n                            </div>\n");
  return buffer;
},"14":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("                <h6 class=\"workshop-modal-tags\">");
  stack1 = helpers._triageMustache.call(depth0, "tag", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</h6>\n");
  return buffer;
},"16":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("            <div class=\"small-24 medium-12 columns\">\n                <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'src': ("speaker.picture_url")
  },"hashTypes":{'src': "STRING"},"hashContexts":{'src': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" alt=\"\"/>\n\n                <h1>");
  stack1 = helpers._triageMustache.call(depth0, "speaker.name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n                <h3>");
  stack1 = helpers._triageMustache.call(depth0, "speaker.role", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n\n                ");
  data.buffer.push(escapeExpression(((helpers.markdown || (depth0 && depth0.markdown) || helperMissing).call(depth0, "speaker.bio", {"name":"markdown","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n            </div>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<section id=\"header-bar\">\n    <div class=\"row\">\n        <div class=\"large-24 columns navbar\">\n            <header>\n                <nav class=\"top-bar\" data-topbar>\n                    <div class=\"logo-event\">\n                        <a href=\"/\"><img src=\"static/img/jitter_logo.png\" alt=\"Jitter 2015 logo\"/></a>\n                    </div>\n                </nav>\n            </header>\n        </div>\n    </div>\n</section>\n\n<section id=\"header\">\n    <div class=\"row\">\n        <div class=\"small-24 columns\">\n            <p class=\"hello\">\n");
  stack1 = helpers['if'].call(depth0, "isAuthenticated", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.program(3, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("            </p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"small-24 medium-20 end large-24 columns agenda-button\">\n            <a href=\"http://www.mceconf.com/agenda.html\" class=\"mce-button\">DONE</a>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"small-24 medium-18 large-18 columns text-center booking-info\">\n            Book one workshop in each session\n        </div>\n        <div class=\"small-6 medium-3 large-3 columns session-times\">\n            SESSION 1<br>\n            10:00 - 14:00<br>\n        </div>\n        <div class=\"small-6 medium-3 large-3 columns session-times\">\n            SESSION 2<br>\n            15:30 - 19:30<br>\n        </div>\n    </div>\n</section>\n\n<section id=\"jitter\">\n");
  stack1 = helpers.each.call(depth0, "workshop", "in", "controllers.workshops", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(5, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    <div class=\"row\">\n        <div class=\"small-24 medium-20 end large-24 columns agenda-button\">\n            <a href=\"http://www.mceconf.com/agenda.html\" class=\"mce-button\">DONE</a>\n        </div>\n    </div>\n</section>\n\n<div id=\"modal\" class=\"reveal-modal workshop-modal\" data-reveal>\n    <div class=\"row\">\n        <div class=\"show-for-medium-up medium-4 large-4 columns workshop-modal-logo\">\n            <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'src': ("model.selectedWorkshop.image_url")
  },"hashTypes":{'src': "STRING"},"hashContexts":{'src': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push("/>\n        </div>\n        <div class=\"small-24 medium-20 large-20 columns\">\n            <h1>");
  stack1 = helpers._triageMustache.call(depth0, "model.selectedWorkshop.name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n            ");
  data.buffer.push(escapeExpression(((helpers.markdown || (depth0 && depth0.markdown) || helperMissing).call(depth0, "model.selectedWorkshop.description", {"name":"markdown","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n");
  stack1 = helpers.each.call(depth0, "tag", "in", "model.selectedWorkshop.tags", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(14, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </div>\n    </div>\n\n    <div class=\"row\">\n");
  stack1 = helpers.each.call(depth0, "speaker", "in", "model.selectedWorkshop.speakers", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(16, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </div>\n\n    <a class=\"close-reveal-modal\">&#215;</a>\n</div>\n\n");
  return buffer;
},"useData":true});