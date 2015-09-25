import angular = require("angular");
import App = require("../app.module");

export interface ITestService {
    getPost(id: number): angular.IHttpPromise<IJsonPlaceholderPost>;
}

export interface IJsonPlaceholderPost {
  userId: number;
  title: string;
  body: string;
}

export class TestService {

  static $inject = ["$http"];

  public message: string;

  private $http: angular.IHttpService;

  constructor($http: angular.IHttpService) {
    this.$http = $http;
  }

  public getPost(id: number): angular.IHttpPromise<IJsonPlaceholderPost> {
      return this.$http.get(`http://jsonplaceholder.typicode.com/posts/${id}`);
  }

}


App.service("TestService", TestService);
