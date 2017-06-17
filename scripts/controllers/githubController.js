angular.module('GithubViewer.controllers').controller('GithubController', ["$scope", "$http", function ($scope, $http) {

    var onSucess = function (response) {
        $scope.user = response.data;
    };

    var onFail = function () {
        $scope.user = undefined;
        $scope.errorMessage = "User not found";
    };

    $scope.search = function (username) {
        $scope.errorMessage = undefined;
        $http.get("https://api.github.com/users/" + username).then(onSucess, onFail);
    };
}]);