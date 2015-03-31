angular.module('app')
.controller('ApplicationCtrl', function ($scope, UserSvc, $window, toastr) {
	if ($window.sessionStorage.token) { 
		UserSvc.checkUser()
		.then(function (user) {
			$scope.currentUser = user
		})
	}

	$scope.logout = function () {
		UserSvc.logout()
		$scope.currentUser = false
		toastr.info('You have been logged out', 'Information')
	}
	
	$scope.$on('login', function (_, user) {
		$scope.currentUser = user
	})
})