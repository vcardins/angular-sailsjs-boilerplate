/**
 * Chat component to wrap all book specified stuff together. This component is divided to following logical components:
 *
 *  Controllers
 *  Directives
 *  Models
 *
 * All of these are wrapped to 'frontend.modules.chat' angular module.
 */
(function() {
  'use strict';

  // Define frontend.modules.chat angular module
  angular.module('frontend.modules.chat', []);

  // Module configuration
  angular.module('frontend.modules.chat')
    .config([
      '$stateProvider',
      function config($stateProvider) {
        $stateProvider
          // Chat
          .state('modules.chat', {
            url: '/modules/chat',
            views: {
              'content@': {
                templateUrl: '/frontend/modules/chat/chat.html',
                controller: 'ChatController',
                resolve: {
                  _messages: [
                    '$localStorage',
                    'moment',
                    'MessageModel',
                    function resolve(
                      $localStorage,
                      moment,
                      MessageModel
                    ) {
                      var parameters = {
                        where: {
                          createdAt: {
                            '>': ($localStorage.chat && $localStorage.chat.time) ?
                              $localStorage.chat.time : moment().format()
                          }
                        }
                      };

                      return MessageModel.load(parameters);
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
