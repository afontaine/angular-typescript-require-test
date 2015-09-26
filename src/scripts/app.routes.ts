import App = require("./app.module");
import AppCtrl = require("./app.controller");
import TechCtrl = require("./controllers/tech");
import IndexCtrl = require("./controllers/index");

App.config(config);

function config(
  $stateProvider: angular.ui.IStateProvider,
  $urlMatcherFactoryProvider: angular.ui.IUrlMatcherFactory
) {
  $urlMatcherFactoryProvider.strictMode(false);
  $stateProvider.state("index", {
    views: {
      "body": {
        templateUrl: "views/app/index.html",
        controller: AppCtrl,
        controllerAs: "vm"
      }
    }
  }).state("index.home", {
    url: "",
    views: {
      "contentView": {
        templateUrl: "views/app/home.html",
        controller: IndexCtrl,
        controllerAs: "vm"
      }
    }
  }).state("index.tech", {
    url: "/tech",
    views: {
      "contentView": {
        templateUrl: "views/app/tech.html",
        controller: TechCtrl,
        controllerAs: "vm"
      }
    }
  });
}
