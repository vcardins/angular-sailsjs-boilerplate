/**
 * Messages component which is divided to following logical components:
 *
 *  Controllers
 *
 * All of these are wrapped to 'frontend.modules.messages' angular module.
 */
(function() {
  'use strict';

  // Define frontend.modules.messages angular module
  angular.module('frontend.modules.messages', []);

  // Module configuration
  angular.module('frontend.modules.messages')
    .config([
      '$stateProvider',
      function config($stateProvider) {
        $stateProvider
          // Messages
          .state('modules.messages', {
            url: '/modules/messages',
            views: {
              'content@': {
                templateUrl: '/frontend/modules/messages/messages.html',
                controller: 'MessagesController'
              }
            }
          })
        ;
      }
    ])
  ;
}());
