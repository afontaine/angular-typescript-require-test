import App = require("../app.module");
import angular = require("angular");

class TechCtrl {

  public awesomeThings: Array<string>;

  constructor(private $scope: angular.IScope) {
    this.awesomeThings = ["HTML5", "AngularJS", "TypeScript"];
  }
}

App.controller("TechCtrl", TechCtrl);

export = TechCtrl;
