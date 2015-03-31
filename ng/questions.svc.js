angular.module('app')
.service('QuestionsSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/questions/')
  }
  this.create = function (question) {
    return $http.post('/api/questions', question)
  }
  this.fetchOne = function (id) {
  	return $http.get('/api/questions/' + id)
  }
  this.update = function(id, question) {
  	return $http.put('/api/questions/' + id, question)
  }
})