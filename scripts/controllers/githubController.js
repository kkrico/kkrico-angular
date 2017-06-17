angular.module('GithubViewer.controllers').controller('GithubController', ["$scope", "$http", function ($scope, $http) {

    var onSucess = function (response) {
        $scope.user = response.data;
    };

    var onFail = function () {

    };


    $scope.search = function (username) {
        $http.get("https://api.github.com/users/" + username).then(onSucess, onFail);
    };
}]);