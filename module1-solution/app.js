(function () {
  'use strict';

  //console.log('in registration function');
  angular.module('LunchCheckerApp', [])
  .controller('LunchCheckerController', LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];


  function LunchCheckerController($scope)
  {
    //console.log('in LunchCheckerController');
    $scope.lunchStatus = '';
    /*$scope.getLunchStatus = function(lunchDishes)
    {
      if (lunchDishes === '') return 'Please enter data first';
      let dishes = lunchDishes.split(',');
      if (dishes.length <= 3) return 'Enjoy!';
      return 'Too much!';

    };*/

    $scope.checkLunch = function ()
    {
      console.log('in checkLunch: ', $scope.lunchDishes);

      //$scope.lunchStatus = $scope.getLunchStatus($scope.lunchDishes);
      if ($scope.lunchDishes === undefined || $scope.lunchDishes === '')
      {
        $scope.lunchStatus = 'Please enter data first';
      }
      else
      {
        let dishes = $scope.lunchDishes.split(',');
        if (dishes.length <= 3)
          $scope.lunchStatus = 'Enjoy!';
        else
          $scope.lunchStatus = 'Too much!';
      }
    };

  };
})();
