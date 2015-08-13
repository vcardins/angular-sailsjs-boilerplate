/**
 * This file contains all necessary Angular model definitions for 'frontend.admin.request-log' module.
 *
 * Note that this file should only contain models and nothing else. Also note that these "models" are just basically
 * services that wraps all things together.
 */
(function () {
  'use strict';

  /**
   * Model for Request Log API, this is used to wrap all Book objects specified actions and data change actions.
   */
  angular.module('frontend.admin.request-log')
    .factory('RequestLogModel', [
      '$log',
      'DataModel', 'DataService',
      function factory(
        $log,
        DataModel, DataService
      ) {
        var model = new DataModel('requestLog');    
        return model;
      }
    ])
  ;
}());
