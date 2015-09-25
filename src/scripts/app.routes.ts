import App = require("./app.module");

import MainCtrl = require("./controllers/main");
import IndexCtrl = require("./controllers/index");

App.config(config);

function config(
  $stateProvider: angular.ui.IStateProvider,
  $urlMatcherFactoryProvider: angular.ui.IUrlMatcherFactory
) {
  $urlMatcherFactoryProvider.strictMode(false);
  $stateProvider.state("home", {
    url: "/home",
    views: {
      "contentView": {
        templateUrl: "views/tech.html",
        controller: MainCtrl,
        controllerAs: "vm"
      }
    }
  }).state("index", {
    url: "",
    views: {
      "contentView": {
        templateUrl: "views/index.html",
        controller: IndexCtrl,
        controllerAs: "vm"
      }
    }
  });
}
