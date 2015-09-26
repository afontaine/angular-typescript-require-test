import App = require("./app.module");
import angular = require("angular");

interface IAppScope extends angular.IScope {
  $state: angular.ui.IStateService;
}

class AppCtrl {
  static $inject = ["$scope", "$state"];

  public stateName: string;

  constructor($scope: IAppScope, $state: angular.ui.IStateService) {
    $scope.$state = $state;
    $scope.$watch("$state.current", (state: any) => {
      this.stateName = state.name;
    });
  }

  public stateIs(state: string): boolean {
    return this.stateName === state;
  }
}
App.controller("AppCtrl", AppCtrl);
export = AppCtrl;
