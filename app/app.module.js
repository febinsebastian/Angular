
'use strict';

var appController = angular.module('controllers', []);
var appServices = angular.module('services', []);
var apppRouters = angular.module('router', ['ui.router']);

var app = angular.module('app', [
    'controllers',
    'services',
    'router'
]);

app.run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        
    });
});
