angular.module('app')
.controller('QuestionDetailCtrl', function ($scope, QuestionsSvc, $location) {	
	QuestionsSvc.fetchOne($location.path())
	.success(function (question) {
		$scope.question = question	
	})

})