(function ()
{
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(response)
  {
    let items = this;
    items.itemList = response.data;
    // console.log('items=', itemList.items)
  };

})();
