angular.module('app')
.controller('ApplicationCtrl', function ($scope, UserSvc, $window) {
	if ($window.sessionStorage.token) { 
		UserSvc.checkUser()
		.then(function (user) {
			$scope.currentUser = user
		})
	}

	$scope.logout = function () {
		UserSvc.logout()
		$scope.currentUser = false
		$scope.logoutMessage = "You have been logged out"
	}
	
	$scope.$on('login', function (_, user) {
		$scope.currentUser = user
	})
})