angular.module('app')
.controller('ApplicationCtrl', function ($scope, UserSvc, $window) {
	$scope.$on('login', function (_, user) {
		$scope.currentUser = user
	})

	// if ($window.sessionStorage.token) { 
	// 	UserSvc.getUser()
	// }
})