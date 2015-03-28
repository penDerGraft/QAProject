angular.module('app')
.controller('QuestionsCtrl', function ($scope, QuestionsSvc, $location) {
  $scope.askQuestion = function () {
      QuestionsSvc.create({
        username: $scope.username,
        title: 	  $scope.questionTitle,
        body:     $scope.questionBody
      })
      .success(function (question) {
        $scope.questions.unshift(question)
        $scope.questionBody = null
        $scope.questionTitle = null
        $location.path('/')
      })
      .error(function(error) {
		$scope.errorMsg = 'All fields must be filled out'
	 })
  }

  QuestionsSvc.fetch()
  .success(function (questions) {
    $scope.questions = questions
  })
})