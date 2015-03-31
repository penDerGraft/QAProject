angular.module('app')
.controller('AnswerCtrl', function ($scope, AnswersSvc, QuestionsSvc, $location) {
	$scope.editBody = ''

	$scope.postAnswer = function (answerBody) {
		$scope.answers.push({
			username: $scope.currentUser.username,
			body: 	  answerBody,
			votes:    0 
		})

		var question = { 
			_id: $scope.question._id, 
			answers: $scope.answers
		}
		QuestionsSvc.update($location.path(), question)
		.success(function (question) {
			$scope.answers = question.answers
		})
	}

	$scope.deleteAnswer = function(questID, ansID) {
		// this.vote += amount
		console.log(questID, ansID)
		AnswersSvc.deleteAnswer(questID, ansID)
		.success(function (answers) {
			$scope.answers = answers
		})
	}

	$scope.editAnswer = function (id, editBody) {
		$scope.answers.forEach(function (item) {
			if(item._id === id) {
				item.body = editBody
				// console.log(editBody)
			}
		})

		console.log($scope.answers)

		var question = {
			_id: $scope.question._id,
			answers: $scope.answers
		}

		QuestionsSvc.update($location.path(), question)
		.success(function (question) {
			$scope.answers = question.answers
		})
	}

	$scope.vote = function (id, vote) {
		$scope.answers.forEach(function (item) {
			if(item._id === id) {
				item.votes = vote
				// console.log(editBody)
			}
		})

		var question = {
			_id: $scope.question._id,
			answers: $scope.answers
		}

		QuestionsSvc.update($location.path(), question)
		.success(function (question) {
			$scope.message = "Answer Updated!"
		})

	}

	QuestionsSvc.fetchOne($location.path())
	.success(function (question) {
		 $scope.answers = question.answers
		 $scope.question = question
	})

})


.directive('ngReallyClick', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                var message = attrs.ngReallyMessage;
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngReallyClick);
                }
            });
        }
    }
}]);
