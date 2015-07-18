// /*global angular*/

angular.module('Hackpanel.hackplications')
    .directive('hackplications', function () {
        'use strict';

        return {
            restrict: 'E',
            template: '<h1> OMG IT WORKZZ!! </h1><h4>The controller says:</h4><ul><li ng-repeat='name in hackplicationsController.hackapplicants'>{{ name }}</li></ul>',
            controller: 'hackpanel.hackplications.hackplicationsController',
            controllerAs: 'hackplicationsController'
        };
    });