var app = angular.module("controllers", []);
//Main controller for the search function
app.controller('mainCtrl', ["$scope", "$http", function($scope, $http) {
    $scope.q ="";
    $scope.searchData = function() {
      var url="http://api.openweathermap.org/data/2.5/find?q="+$scope.q+"&type=like";
      var id = "&appid=YOUR API KEY"; //YOUR API KEY GOES HERE
      var callBack = "&callback=JSON_CALLBACK";
      var apiCall = url + id + callBack; //Concatenates url
      if($scope.q.length >= 3) {  //If user input greater than 3, send API call, allows user to search on the 3 first letters of a city
        var promise = $http.jsonp(apiCall);
        promise.success(function(data){
          $scope.data = data;
          console.log($scope.data);
        });
      };
    };
}]);
