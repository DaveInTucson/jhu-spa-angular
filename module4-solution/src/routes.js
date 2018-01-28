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
          templateUrl: 'src/menuapp/templates/categories-state.template.html',
          controller: 'CategoriesController as categoryList',
          resolve: {
            categories: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getAllCategories()
                  .then(function (response) { return response.data; });
            }],
          },
        })
        .state('items', {
          url: '/items/{shortName}',
          templateUrl: 'src/menuapp/templates/items.template.html',
          controller: 'ItemsController as items',
          resolve: {
              items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.shortName)
                  .then(function (response) { return response.data; });
              }]},
        })
        ;
  };

})();
