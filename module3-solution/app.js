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
    nidc.matchedItems = null;
    nidc.resultMessage = '';
    // console.log('in NarrowItDownController');

    nidc.OnNarrowItDown = function()
    {
        let nidc = this;
        console.log('searchTerm=', nidc.searchTerm);
        if (nidc.searchTerm === null || nidc.searchTerm == '')
        {
          nidc.resultMessage = 'Nothing found';
          nidc.matchedItems = [];
          return;
        }
        nidc.resultMessage = '';
        MenuSearchService.getMatchedMenuItems(nidc.searchTerm)
          .then(function (response)
          {
            // console.log('response=', response);
            nidc.matchedItems = response;
            if (nidc.matchedItems.length === 0)
            {
              nidc.resultMessage = 'Nothing found';
            }
          })
          .catch(function (response)
          {
            console.log('error: ', response);
            nidc.resultMessage = "Error fetching menu items: " + response;
          });
    };
  };

  MenuSearchService.$inject = ['$http', '$q'];
  function MenuSearchService($http, $q)
  {
    let service = this;

    service.allMenuItems = null;

    service.getAllMenuItems = function()
    {
      let o = {
        method: 'GET',
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      };
      let promise = $http(o);
      promise.then(function(response)
      {
        service.allMenuItems = response.data;
      });
      return promise;
    };

    function filterMenuItems(menuItems, searchTerm)
    {
      let filteredItems = [];
      // console.log('have ', menuItems.length, ' items, filtering on ', searchTerm)
      for (let i = 0; i < menuItems.length; i++)
      {
        if (menuItems[i].description.indexOf(searchTerm) !== -1)
        {
          filteredItems.push(menuItems[i]);
        }
      }
      // console.log('matched ', filteredItems.length, ' items');
      return filteredItems;
    };

    service.getMatchedMenuItems = function(searchTerm)
    {
      return service.getAllMenuItems()
        .then(function(response)
        {
          let matchedMenuItems = filterMenuItems(response.data.menu_items, searchTerm);
          let deferred = $q.defer();
          deferred.resolve(matchedMenuItems);
          return deferred.promise;
        });

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
