/*global angular*/

angular.module("Hackpanel.hackplications", [])
    .controller("hackpanel.hackplications.hackplicationsController", function () {
        "use strict";

        this.hackapplicants = ["Pedro", "Juan", "Pablo"];
    })
    .directive("hackplications", function () {
        "use strict";

        return {
            restrict: "E",
            template: "<h1> OMG IT WORKZZ!! </h1><h4>The controller says:</h4><ul><li ng-repeat='name in hackplicationsController.hackapplicants'>{{ name }}</li></ul>",
            controller: "hackpanel.hackplications.hackplicationsController",
            controllerAs: "hackplicationsController"
        };
    });