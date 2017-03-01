//Controller for the weather details page
app.controller("detailsCtrl", ["$scope", "$routeParams", "$http", "DateService", function($scope, $routeParams, $http, DateService, getLocal, degToCard) {
    var url="http://api.openweathermap.org/data/2.5/weather?id=" + $routeParams.id; //Add city id to url
    var id = "&appid=YOUR API KEY";
    var callBack = "&callback=JSON_CALLBACK";
    var apiCall = url + id + callBack;
    var promise = $http.jsonp(apiCall); //Concatenates the url and sends API call
    promise.success(function(current){
      $scope.current = current;
      console.log($scope.current);
    });
    var urlForecast = "http://api.openweathermap.org/data/2.5/forecast?id=" + $routeParams.id;
    var forecastCall = urlForecast + id + callBack;
    var promise2 = $http.jsonp(forecastCall);
    promise2.success(function(forecast){
      $scope.forecast = forecast;
      console.log($scope.forecast);
    });

    $scope.forecastStart = DateService.startDay(); //Start and end points for date object
    $scope.forecastEnd = DateService.endDay();


}]);
