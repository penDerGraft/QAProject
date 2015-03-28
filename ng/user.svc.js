angular.module('app')
.service('UserSvc', function ($http, $window) {
	var svc = this
	svc.getUser = function () {
		return $http.get('/api/users')
		.then(function(response) {
			return response.data
		})
	}

	svc.login = function (username, password) {
		return $http.post('/api/sessions', {
			username: username, password: password
		}).then(function (val) {
			svc.token = val.data.token	
			// $window.sessionStorage.token = val.token		 
			$http.defaults.headers.common['X-Auth'] = val.data
			return svc.getUser()
		})
	}

	svc.register = function (username, password) {
	    return $http.post('/api/users', {
	      username: username, password: password
	    }).then(function () {
	      return svc.login(username, password)
	    })
  	}

  // 	svc.checkUser = function ($window) {
  // 		if ($window.sessionStorage.token) { 
		// 	return true; 
		// } else {
		// 	return false;
		// }
  // 	}

})