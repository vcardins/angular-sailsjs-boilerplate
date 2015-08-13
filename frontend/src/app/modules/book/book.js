/**
 * Book component to wrap all book specified stuff together. This component is divided to following logical components:
 *
 *  Controllers
 *  Models
 *
 * All of these are wrapped to 'frontend.modules.book' angular module.
 */
(function() {
  'use strict';

  // Define frontend.modules.book angular module
  angular.module('frontend.modules.book', []);

  // Module configuration
  angular.module('frontend.modules.book')
    .config([
      '$stateProvider',
      function config($stateProvider) {
        $stateProvider
          // Book list
          .state('modules.books', {
            url: '/modules/books',
            views: {
              'content@': {
                templateUrl: '/frontend/modules/book/list.html',
                controller: 'BookListController',
                resolve: {
                  _items: [
                    'ListConfig',
                    'BookModel',
                    function resolve(
                      ListConfig,
                      BookModel
                    ) {
                      var config = ListConfig.getConfig();

                      var parameters = {
                        limit: config.itemsPerPage,
                        sort: 'releaseDate DESC'
                      };

                      return BookModel.load(parameters);
                    }
                  ],
                  _count: [
                    'BookModel',
                    function resolve(BookModel) {
                      return BookModel.count();
                    }
                  ],
                  _authors: [
                    'AuthorModel',
                    function resolve(AuthorModel) {
                      return AuthorModel.load();
                    }
                  ]
                }
              }
            }
          })

          // Single book
          .state('modules.book', {
            url: '/modules/book/:id',
            views: {
              'content@': {
                templateUrl: '/frontend/modules/book/book.html',
                controller: 'BookController',
                resolve: {
                  _book: [
                    '$stateParams',
                    'BookModel',
                    function resolve(
                      $stateParams,
                      BookModel
                    ) {
                      return BookModel.fetch($stateParams.id, {populate: 'author'});
                    }
                  ]
                }
              }
            }
          })

          // Add new book
          .state('modules.book.add', {
            url: '/modules/book/add',
            data: {
              access: 2
            },
            views: {
              'content@': {
                templateUrl: '/frontend/modules/book/add.html',
                controller: 'BookAddController',
                resolve: {
                  _authors: [
                    'AuthorModel',
                    function resolve(AuthorModel) {
                      return AuthorModel.load();
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
