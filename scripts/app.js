var app = angular.module("GithubViewer", ["GithubViewer.controllers", "ngRoute"]);
angular.module('GithubViewer.controllers', []);
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/githubuser/info.html',
            controller: 'GithubController'
        })
}]);