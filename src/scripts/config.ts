/// <reference path="references.d.ts"/>

require.config({
  paths: {
    "bower_components": "../bower_components",
    "jquery": "../bower_components/jquery/dist/jquery",
    "jquery.bootstrap": "../bower_components/bootstrap-sass/assets/javascripts/bootstrap",
    "angular": "../bower_components/angular/angular",
    "angular.ui.bootstrap": "../bower_components/angular-bootstrap/ui-bootstrap",
    "angular.ui.router": "../bower_components/angular-ui-router/release/angular-ui-router"
  },
  shim: {
    "jquery.bootstrap": ["jquery"],
    "angular": {
      "exports": "angular"
    },
    "angular.ui.router": ["angular"],
    "angular.ui.bootstrap": ["angular"]
  }
});

require(["main"], () => {
//
});
