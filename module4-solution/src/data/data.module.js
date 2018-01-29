(function ()
{
  'use strict';

  angular.module("Data", [])
    /* The name ApiBasePath seems pretty generic, but clearly nothing better
     * comes to mind at the moment, so it'll have to do for now...
     */
    .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
    ;
})();
