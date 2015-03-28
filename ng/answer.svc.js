angular.module('app')
.service('AnswersSvc', function ($http) {
	this.create = function (id, answer) {
  		return $http.post('/api/questions' + id, answer)
  	}

  	this.fetch = function (id) {
  		return $http.get('/api/questions' + id)
  	}

})