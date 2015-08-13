/**
 * Author component to wrap all author specified stuff together. This component is divided to following logical
 * components:
 *
 *  Controllers
 *  Models
 *
 * All of these are wrapped to 'frontend.modules.author' angular module.
 */
(function() {
  'use strict';

  // Define frontend.modules.author angular module
  angular.module('frontend.modules.author', []);

  // Module configuration
  angular.module('frontend.modules.author')
    .config([
      '$stateProvider',
      function config($stateProvider) {
        $stateProvider
          // Authors list
          .state('modules.authors', {
            url: '/modules/authors',
            views: {
              'content@': {
                templateUrl: '/frontend/modules/author/list.html',
                controller: 'AuthorListController',
                resolve: {
                  _items: [
                    'ListConfig',
                    'AuthorModel',
                    function resolve(
                      ListConfig,
                      AuthorModel
                    ) {
                      var config = ListConfig.getConfig();

                      var parameters = {
                        populate: 'books',
                        limit: config.itemsPerPage,
                        sort: 'name ASC'
                      };

                      return AuthorModel.load(parameters);
                    }
                  ],
                  _count: [
                    'AuthorModel',
                    function resolve(AuthorModel) {
                      return AuthorModel.count();
                    }
                  ]
                }
              }
            }
          })

          // Single author
          .state('modules.author', {
            url: '/modules/author/:id',
            views: {
              'content@': {
                templateUrl: '/frontend/modules/author/author.html',
                controller: 'AuthorController',
                resolve: {
                  _author: [
                    '$stateParams',
                    'AuthorModel',
                    function resolve(
                      $stateParams,
                      AuthorModel
                    ) {
                      return AuthorModel.fetch($stateParams.id);
                    }
                  ],
                  _books: [
                    '$stateParams',
                    'BookModel',
                    function resolve(
                      $stateParams,
                      BookModel
                    ) {
                      return BookModel.load({author: $stateParams.id});
                    }
                  ],
                  _booksCount: [
                    '$stateParams',
                    'BookModel',
                    function resolve(
                      $stateParams,
                      BookModel
                    ) {
                      return BookModel.count({author: $stateParams.id});
                    }
                  ]
                }
              }
            }
          })

          // Add new author
          .state('modules.author.add', {
            url: '/modules/author/add',
            data: {
              access: 2
            },
            views: {
              'content@': {
                templateUrl: '/frontend/modules/author/add.html',
                controller: 'AuthorAddController'
              }
            }
          })
        ;
      }
    ])
  ;
}());
