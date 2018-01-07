(function ()
{
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems)
    ;

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService)
  {
    let nidc = this;
    nidc.error = null;
    // console.log('in NarrowItDownController');
    MenuSearchService.getAllMenuItems().then(function (response)
      {
        nidc.allMenuItems = response.data;
        // console.log('allMenuItems=', nidc.allMenuItems);
      }
    ).catch(function(response)
      {
        ndic.error = "Error fetching menu items: " + response;
      }
    );
  };

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http)
  {
    let service = this;

    service.allMenuItems = null;

    service.getAllMenuItems = function()
    {
      let o = {
        method: 'GET',
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      };
      return $http(o);
    };
  };

  function FoundItems()
  {
    let ddo = {
      templateUrl: 'foundItemsTemplate.html',
      scope: {
        items: '=',
      },
    };
    return ddo;
  };
})();
