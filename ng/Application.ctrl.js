angular.module('app')
.controller('ApplicationCtrl', function ($scope, UserSvc, $window) {
	
	// if($window.sessionStorage.token) {
	// 	UserSvc.getUser()
	// 	.then(function (user){
	// 		$scope.$emit('login', user)
	// 	})
	// }
	
	$scope.$on('login', function (_, user) {
		$scope.currentUser = user
	})
})