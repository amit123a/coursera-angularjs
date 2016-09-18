(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.checkIfTooMuch = function () {

      if(!$scope.lunchMenu) {
        $scope.message="Please enter data first"
      } else {
        var lunchItems = $scope.lunchMenu.split(',');
        if (lunchItems.length <=3 ) {
          $scope.message="Enjoy !"
        } else {
          $scope.message="Too much!"

        }
      }
    };

  }

})();
