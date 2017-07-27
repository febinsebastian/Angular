
angular.module('router')
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider  
      .state('home', {
          url: "/home",
          templateUrl: "app/components/home/home.html",
          title:'Home',
          controller:"HomeCtrl"
      }) 
});

angular.module('controllers')
.controller('HomeCtrl', ['$scope','$state', function ($scope, $state) {
  
 }]);



