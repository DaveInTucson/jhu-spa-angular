(function () {
  'use strict';

  angular.module('ShoppingListApp', [])
    .controller('ShoppingListController', ShoppingListController)
    .service('ShoppingListService', ShoppingListService);

  ShoppingListController.$inject = ['ShoppingListService'];
  function ShoppingListController(ShoppingListService)
  {
    let shoppingList = this;

    shoppingList.items = ShoppingListService.getItems();

    shoppingList.buyItem = function(index)
    {
      ShoppingListService.buyItem(index);
    };

    shoppingList.allBought = function()
    { return ShoppingListService.quantityToBuy() == 0; };

    shoppingList.noneBought = function()
    { return ShoppingListService.quantityBought() == 0; };

    shoppingList.itemIsBought = function(index)
    { return ShoppingListService.itemIsBought(index); };
  };

  // A single list is used, with the bought field on each item determining
  // whether to list it on the "To Buy" list or the "Bought" list.
  // The act of purchasing an item changes the bought field to true.
  function ShoppingListService()
  {
    let service = this;

    let items = [
      { name: "cookies", quantity: 10, bought: false },
      { name: "apples" , quantity:  7, bought: false },
      { name: "cheese" , quantity:  4, bought: false },
      { name: "bread"  , quantity:  2, bought: false },
      { name: "salami" , quantity:  1, bought: false },
    ];

    let numberOfItemsToBuy = items.length;
    let numberOfItemsBought = 0;

    service.buyItem = function(index)
    {
      if (!items[index].bought)
      {
        numberOfItemsBought++;
        numberOfItemsToBuy--;
      }
      items[index].bought = true;
    };

    service.quantityBought = function()
    {
      return numberOfItemsBought;
    };

    service.quantityToBuy = function()
    {
      return numberOfItemsToBuy;
    };

    service.getItems = function()
    { return items; };

    service.itemIsBought = function(index)
    { return items[index].bought; };
  };

})();
