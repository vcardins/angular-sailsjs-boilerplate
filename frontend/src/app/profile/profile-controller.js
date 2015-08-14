/**
 * This file contains all necessary Angular controller definitions for 'frontend.modules.messages' module.
 *
 * Note that this file should only contain controllers and nothing else.
 */
(function() {
  'use strict';

  /**
   * Message controller that demonstrates boilerplate error handling and usage of MessageService.
   *
   * @todo
   *  1) Make example about $http / $sailsSocket usage where automatic message is disabled.
   *  2) Make example about invalid JWT
   */
  angular.module('frontend.profile')
    .controller('ProfileController', [
      '$scope', '$http', '$sailsSocket',
      'UserService', 'BackendConfig',
      function(
        $scope, $http, $sailsSocket,
        UserService, BackendConfig
      ) {
        $scope.user = UserService.user;
        console.log($scope.user())
      }
    ])
  ;
}());
