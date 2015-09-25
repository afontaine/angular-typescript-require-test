import angular = require("angular");
import App = require("../app.module");

class TestService {
  public message: string;

  constructor() {
    this.message = "Welcome to this test app";
  }

}


App.service("TestService", TestService);
export = TestService;
