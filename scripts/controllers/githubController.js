angular.module('GithubViewer.controllers').controller('GithubController', ["$scope", "$http", function ($scope, $http) {

    var onSucess = function (response) {
        $scope.user = response.data;

        $http.get($scope.user.repos_url)
            .then(onRepos, onFail)
    };

    var onRepos = function (response) {
        $scope.user.repos = response.data;
        $scope.user.repos.sortOrder = '-stargazers_count';
        
    };

    var onFail = function (a) {
        $scope.user = undefined;
        $scope.errorMessage = "Could not fetch data " + a.toJSON();
    };

    $scope.search = function (username) {
        $scope.errorMessage = undefined;
        $http.get("https://api.github.com/users/" + username).then(onSucess, onFail);
    };
}]);