angular.module('app')
.service('QuestionsSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/questions')
  }
  this.create = function (question) {
    return $http.post('/api/questions', question)
  }
})