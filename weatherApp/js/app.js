var app = angular.module("weatherApp", ["ngRoute", "controllers"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.
    when("/", {
      controller: "mainCtrl",
      templateUrl: "templates/mainView.html"
    }).
    when("/:id", {
      controller: "detailsCtrl",
      templateUrl: "templates/details.html"
    }).
    otherwise({redirectTo: "/"
    });
//Route between views and set controller.
}]);
