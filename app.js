(function(){
    var app = angular.module("appModule", ["ngRoute"]);

    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "views/main.html",
                controller: "MainController"
            })
            .otherwise({redirectTo:"/main"});

    }])
}());
