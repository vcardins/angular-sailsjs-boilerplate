/**
 * Login history component. This component is divided to following logical components:
 *
 *  Controllers
 *
 * All of these are wrapped to 'frontend.admin.request-log' angular module. This also contains necessary route
 * definitions for this module.
 */
(function() {
  'use strict';

  // Define frontend.admin module.request-log
  angular.module('frontend.admin.request-log', []);

  // Module configuration
  angular.module('frontend.admin.request-log')
    .config([
      '$stateProvider',
      function config($stateProvider) {
        $stateProvider
          .state('admin.request-log', {
            url: '/admin/requestLog',
            views: {
              'content@': {
                templateUrl: '/frontend/admin/requestLog/index.html',
                controller: 'requestLogController',
                resolve: {
                  _items: [
                    'ListConfig',
                    'RequestLogModel',
                    function resolve(
                      ListConfig,
                      RequestLogModel
                    ) {
                      var config = ListConfig.getConfig();

                      var parameters = {
                        limit: config.itemsPerPage,
                        sort: 'createdAt DESC',
                        populate: 'user'
                      };

                      return RequestLogModel.load(parameters);
                    }
                  ],
                  _count: [
                    'RequestLogModel',
                    function resolve(RequestLogModel) {
                      return RequestLogModel.count();
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
