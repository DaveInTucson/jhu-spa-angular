(function ()
{
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items)
  {
    let ctrl = this;
    ctrl.itemList = items;
    // console.log('items=', itemList.items)
  };

})();
