(function () {
  "use strict";

  angular
    .module("LunchChecker", [])
    .controller("LunchCheckerController", LunchCheckerController);

  LunchCheckerController.$inject = ["$scope"];
  function LunchCheckerController($scope) {
    $scope.items = "";
    $scope.stateOfCheck = "";

    $scope.checkItems = function () {
      var itemsLength =
        $scope.items.length === 0 ? 0 : $scope.items.split(",").length;

      if (itemsLength === 0) {
        $scope.stateOfCheck = "Please enter data first";
      } else if (itemsLength <= 3) {
        $scope.stateOfCheck = "Enjoy!";
      } else {
        $scope.stateOfCheck = "Too Much!";
      }
    };
  }
})();
