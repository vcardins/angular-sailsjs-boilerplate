/**
 * Angular module for examples component. This component is divided to following logical components:
 *
 *  frontend.modules.about
 *  frontend.modules.author
 *  frontend.modules.book
 *  frontend.modules.chat
 *  frontend.modules.messages
 *
 * Each component has it own configuration for ui-router.
 */
(function() {
  'use strict';

  // Define frontend.admin module
  angular.module('frontend.modules', [
    'frontend.modules.about',
    'frontend.modules.author',
    'frontend.modules.book',
    'frontend.modules.chat',
    'frontend.modules.messages'
  ]);

  // Module configuration
  angular.module('frontend.modules')
    .config([
      '$stateProvider',
      function($stateProvider) {
        $stateProvider
          .state('modules', {
            parent: 'frontend',
            data: {
              access: 1
            },
            views: {
              'content@': {
                controller: [
                  '$state',
                  function($state) {
                    $state.go('modules.books');
                  }
                ]
              },
              'pageNavigation@': {
                templateUrl: '/frontend/core/layout/partials/navigation.html',
                controller: 'NavigationController',
                resolve: {
                  _items: [
                    'ContentNavigationItems',
                    function resolve(ContentNavigationItems) {
                      return ContentNavigationItems.getItems('modules');
                    }
                  ]
                }
              }
            }
          })
        ;
      }
    ])
  ;
}());
