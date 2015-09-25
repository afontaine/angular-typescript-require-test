import App = require("../app.module");
import angular = require("angular");

class MainCtrl {

  public awesomeThings: Array<string>;

  constructor(private $scope: angular.IScope) {
    this.awesomeThings = ["HTML5", "AngularJS", "TypeScript"];
  }
}

App.controller("MainCtrl", MainCtrl);

export = MainCtrl;
