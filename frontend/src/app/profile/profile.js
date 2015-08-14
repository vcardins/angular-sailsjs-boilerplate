/**
 * Angular module for frontend.profile component. Basically this file contains actual angular module initialize
 * and route definitions for this module.
 */
(function() {
  'use strict';

  // Define frontend.public module
  angular.module('frontend.profile', []);
        
  // Module configuration
  angular.module('frontend.profile')
    .config([
      '$stateProvider',
      //'AccessLevels',
      function($stateProvider) {
        $stateProvider
          .state('profile', {
            parent: 'frontend',
            abstract:true,
            //template: '<ui-view/>',
            data: {
              access: 1 //AccessLevels.user
            }
          })
          .state('profile.edit', {
            url: '/profile',
            views: {
              'content@': {
                templateUrl: '/frontend/profile/profile.html',
                controller: 'ProfileController'
              },
              'pageNavigation@': false
            }
          })
        ;
      }
    ])
  ;
}());
