(function ()
{
  'use strict';
  // console.log('entering routes.js IIFE');

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');

      // *** Set up UI states ***
      $stateProvider
        // home page
        .state('home', {
            url: '/',
            templateUrl: 'src/menuapp/templates/home.template.html',
        })
        .state('categories', {
          url: '/categories',
          templateUrl: 'src/menuapp/templates/categories.template.html',
          controller: 'CategoriesController as categoryList',
          resolve: {
            categories: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getAllCategories();
            }],
          },
        })
        // .state('items', {
        //
        // })
        ;
  };

})();
