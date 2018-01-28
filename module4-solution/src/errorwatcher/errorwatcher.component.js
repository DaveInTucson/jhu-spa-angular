(function ()
{
    'use strict';

    angular.module('ErrorWatcher')
      .component('errorWatcher', {
        templateUrl: 'src/errorwatcher/errorwatcher.template.html',
        controller: ErrorWatcherController,
      });

    ErrorWatcherController.$inject = ['$transitions'];
    function ErrorWatcherController ($transitions)
    {
      let $ctrl = this;

      $ctrl.errorMessage = ''

      let cancelFns = [];
      console.log('in ErrorWatcherController, $transitions=', $transitions);
      $ctrl.$onInit = function()
      {
        console.log('in $onInit');
        let cancelFn = $transitions.onError({}, function (transition)
        {
          console.log('in $transitions.onError transition=', transition);
          let error = transition.error();
          console.log('error=', transition.error());
          // should have some logic here to do something else when it's not an HTTP error
          $ctrl.errorMessage = error.message + ': ' + error.detail.status + ' ' + error.detail.statusText;
        });
        cancelFns.push(cancelFn);

        console.log('retval=', retval);

        cancelFn = $transitions.onSuccess({}, function (transition)
        {
            console.log('in $transitions.onSuccess, transition=', transition);
            $ctrl.errorMessage = '';
        });
        cancelFns.push(cancelFn);
      };

      $ctrl.$onDestroy = function()
      {
        console.log('in $onDestroy');
        cancelFns.forEach(function (cancelFn) { cancelFn(); });
      }
    };

})();
