/// <amd-dependency path="../services/testService"/>
import App = require("../app.module");
import TestService = require("../services/testService");
import angular = require("angular");

class IndexCtrl {

  static $inject = ["$scope", "TestService"];

  public body: string;
  public title: string;

  constructor(private $scope: angular.IScope, testService: TestService.ITestService) {
    var num: number = Math.ceil(Math.random() * 100);
    console.log(num);
    testService.getPost(num).then((response: angular.IHttpPromiseCallbackArg<TestService.IJsonPlaceholderPost>) => {
      this.body = response.data.body;
      this.title = response.data.title;
    });
  }
}

App.controller("IndexCtrl", IndexCtrl);

export = IndexCtrl;
