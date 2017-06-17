var app = angular.module("GithubViewer", ["GithubViewer.controllers", "ngRoute"]);
angular.module('GithubViewer.controllers', []);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'GithubController'
        })
});