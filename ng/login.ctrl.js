angular.module('app')
.controller('LoginCtrl', function ($scope, UserSvc, $location, $window) {
	$scope.login = function (username, password) {
		UserSvc.login(username, password)
		.then(function (user){
			$scope.$emit('login', user)
			$location.path('/')

		},
		function(error) {
			$scope.errorMsg = 'Incorrect username/password'
		})
	}

})