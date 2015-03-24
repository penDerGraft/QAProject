
// module
// ---------------------------------------------------------------------------------------------------------

var app = angular.module('app', [
	"ngRoute"
])

// routes
// ---------------------------------------------------------------------------------------------------------


app.config(function ($routeProvider) {
	$routeProvider
	.when('/', { controller: 'QuestionsCtrl', templateUrl: 'questions.html' })
	.when('/ask', { controller: 'QuestionsCtrl', templateUrl: 'ask.html' })
})

// controllers
// ---------------------------------------------------------------------------------------------------------

app.controller('QuestionsCtrl', function ($scope, QuestionsSvc, $location) {
  $scope.askQuestion = function () {
      QuestionsSvc.create({
        username: 'someUser',
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


// custom services
// ---------------------------------------------------------------------------------------------------------

app.service('QuestionsSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/questions')
  }
  this.create = function (question) {
    return $http.post('/api/questions', question)
  }
})
