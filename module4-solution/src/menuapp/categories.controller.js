(function ()
{
  'use strict';

  angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categories'];
  function CategoriesController(categories)
  {
    let categoryList = this;
    categoryList.categories = categories;
  };
})();
