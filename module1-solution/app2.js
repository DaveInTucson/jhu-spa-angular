
(function () {
  'use strict';

  angular.module('LunchCheckerApp2', [])
  .controller('LunchCheckerController', LunchCheckerController)
  .filter('checkDishes', CheckDishesFilter);

  LunchCheckerController.$inject = ['$scope', 'checkDishesFilter'];
  function LunchCheckerController($scope, checkDishesFilter) {

    $scope.checkLunch = function() {
      $scope.lunchStatus = checkDishesFilter($scope.lunchDishes);
    };

  }

  function CheckDishesFilter() {
    return function (dishesText) {
      if (dishesText === undefined || dishesText === '')
        return 'Please enter data first';
      let dishesList = dishesText.split(',');
      if (dishesList.length <= 3)
        return 'Enjoy!';
      return 'Too much!';
    };
  }


})();
