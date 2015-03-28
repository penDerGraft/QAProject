angular.module('app')
.controller('AnswerCtrl', function ($scope, AnswersSvc, QuestionsSvc, $location) {	
	$scope.postAnswer = function () {
		AnswersSvc.create (
		$location.path(),	
		{
			username: $scope.username,
			body: 	  $scope.answerBody
		})
		.success(function (answer) {
			$scope.answers.unshift(answer)
			$scope.answerBody = null        
			console.log(answer.body)
		})
		.error(function(error) {
			$scope.errorMsg = 'All fields must be filled out'
		})
	}

	QuestionsSvc.fetchOne($location.path())
	.success(function (question) {
		 $scope.answers = question.answers
	})

})