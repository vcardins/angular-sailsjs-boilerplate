/**
 * Angular module for frontend.modules.about component. Basically this file contains actual angular module initialize
 * and route definitions for this module.
 */
(function() {
  'use strict';

  // Define frontend.public module
  angular.module('frontend.modules.about', []);

  // Module configuration
  angular.module('frontend.modules.about')
    .config([
      '$stateProvider',
      function($stateProvider) {
        $stateProvider
          .state('modules.about', {
            url: '/about',
            data: {
              access: 0
            },
            views: {
              'content@': {
                templateUrl: '/frontend/modules/about/about.html'
              },
              'pageNavigation@': false
            }
          })
        ;
      }
    ])
  ;
}());
