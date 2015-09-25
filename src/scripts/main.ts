/// <reference path="references.d.ts"/>
/// <amd-dependency path="./app.routes"/>

import angular = require("angular");

angular.element(document).ready(() => {
  angular.bootstrap(document, ["app"]);
});
