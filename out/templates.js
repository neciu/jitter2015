Ember.TEMPLATES["authenticate"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("<div class=\"row\">\n    <div class=\"small-12 columns\">\n        <h1>Please wait while your account is being fetched...</h1>\n    </div>\n</div>\n\n<div id=\"modal\" class=\"reveal-modal\" data-reveal>\n    <h1>Oops...</h1>\n\n    <p>It seems you entered wrong address. Please enter the address from email or contact our team.</p>\n\n    <a class=\"close-reveal-modal\">&#215;</a>\n</div>");
  },"useData":true});

Ember.TEMPLATES["index"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("        <div class=\"row-wrapper\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("workshop.isAttending:attending")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n            <div class=\"row\">\n                <a>\n                    <div class=\"small-12 medium-10 columns\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showInfo", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">\n                        <h6>");
  stack1 = helpers._triageMustache.call(depth0, "workshop.speakerList", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</h6>\n                        <h6>");
  stack1 = helpers._triageMustache.call(depth0, "workshop.name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</h6>\n                    </div>\n                </a>\n                <div class=\"small-6 medium-1 columns\">\n                    <button class=\"tiny\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleSignUp", 0, {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","NUMBER"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'disabled': ("workshop.signUpForbidden0")
  },"hashTypes":{'disabled': "STRING"},"hashContexts":{'disabled': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("workshop.session_0_attending:success")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n                    </button>\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "workshop.session_0_free_spots", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n                <div class=\"small-6 medium-1 columns\">\n                    <button class=\"tiny\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleSignUp", 1, {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","NUMBER"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'disabled': ("workshop.signUpForbidden1")
  },"hashTypes":{'disabled': "STRING"},"hashContexts":{'disabled': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("workshop.session_1_attending:success")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n                    </button>\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "workshop.session_1_free_spots", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("            <div class=\"small-6 columns\">\n                <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'src': ("speaker.picture_url")
  },"hashTypes":{'src': "STRING"},"hashContexts":{'src': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" alt=\"\"/>\n\n                <h1>");
  stack1 = helpers._triageMustache.call(depth0, "speaker.name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n                <h3>");
  stack1 = helpers._triageMustache.call(depth0, "speaker.role", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n\n                <p>");
  stack1 = helpers._triageMustache.call(depth0, "speaker.bio", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n            </div>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<div class=\"row\">\n    <div class=\"small-12 medium-offset-2 medium-8 columns text-center\">\n        Book one workshop in each session\n    </div>\n    <div class=\"small-6 medium-1 columns\">\n        SESSION 1<br>\n        10:00 - 14:00<br>\n    </div>\n    <div class=\"small-6 medium-1 columns\">\n        SESSION 2<br>\n        15:30 - 19:30<br>\n    </div>\n</div>\n\n<section id=\"jitter\">\n");
  stack1 = helpers.each.call(depth0, "workshop", "in", "controllers.workshops", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</section>\n\n<div id=\"modal\" class=\"reveal-modal\" data-reveal>\n    <div class=\"row\">\n        <div class=\"small-12 columns\">\n            <h1>");
  stack1 = helpers._triageMustache.call(depth0, "model.selectedWorkshop.name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n\n            <p>");
  stack1 = helpers._triageMustache.call(depth0, "model.selectedWorkshop.description", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n");
  stack1 = helpers.each.call(depth0, "speaker", "in", "model.selectedWorkshop.speakers", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </div>\n\n    <a class=\"close-reveal-modal\">&#215;</a>\n</div>\n\n");
  return buffer;
},"useData":true});