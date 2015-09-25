/// <amd-dependency path="../services/testService"/>
import App = require("../app.module");
import TestService = require("../services/testService");
import angular = require("angular");

class IndexCtrl {

  public message: string;
  static $inject = ["$scope", "TestService"];

  constructor(private $scope: angular.IScope, testService: TestService) {
    this.message = testService.message;
  }
}

App.controller("IndexCtrl", IndexCtrl);

export = IndexCtrl;
