/**
 * Login history component. This component is divided to following logical components:
 *
 *  Controllers
 *
 * All of these are wrapped to 'frontend.admin.user' angular module. This also contains necessary route
 * definitions for this module.
 */
(function() {
  'use strict';

  // Define frontend.admin module.user
  angular.module('frontend.admin.user', []);

  // Module configuration
  angular.module('frontend.admin.user')
    .config([
      '$stateProvider',
      function config($stateProvider) {
        $stateProvider
          .state('admin.users', {
            url: '/admin/users',
            views: {
              'content@': {
                templateUrl: '/frontend/admin/user/index.html',
                controller: 'userController',
                resolve: {
                  _items: [
                    'ListConfig',
                    'UserModel',
                    function resolve(
                      ListConfig,
                      UserModel
                    ) {
                      var config = ListConfig.getConfig();

                      var parameters = {
                        limit: config.itemsPerPage,
                        sort: 'username'
                      };

                      return UserModel.load(parameters);
                    }
                  ],
                  _count: [
                    'UserModel',
                    function resolve(UserModel) {
                      return UserModel.count();
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
