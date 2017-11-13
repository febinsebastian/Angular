
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
.controller('HomeCtrl', ['$scope','$state', '$http', function ($scope, $state, $http) {
  	
  	$scope.search = function(){
  		$scope.showLoader = true;
  		$http.get("http://api.openweathermap.org/data/2.5/weather?q="+ $scope.searchkey +"&APPID=b7ab7de2b4e5c0f538a6e9d2239abe03")
		    .then(function(response) {
		        $scope.temperature = response.data;
		        $scope.showLoader = false;
		    },function(response){
		    	$scope.error = true;
		    	$scope.showLoader = false;
    	});
  	}
 }]);



