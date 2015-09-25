/// <reference path="./references.d.ts"/>
/// <amd-dependency path="angular.ui.router"/>
/// <amd-dependency path="angular.ui.bootstrap"/>

import angular = require("angular");

var app: angular.IModule = angular.module("app", [
  "ui.router",
  "ui.bootstrap"
]);

export = app;
