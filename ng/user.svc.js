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
			console.log(val)
			svc.token = val.data.token	
			$window.sessionStorage.token = val.data		 
			$http.defaults.headers.common['X-Auth'] = val.data
			return svc.getUser()
		})
	}

	svc.logout = function() {
	    // Erase the token from the browser
	    delete $window.sessionStorage.token;
	    // Remove header so user is no longer authenticated
	    delete $http.defaults.headers.common['X-Auth'];	    
	};


	svc.register = function (username, password) {
	    return $http.post('/api/users', {
	      username: username, password: password
	    }).then(function () {
	      return svc.login(username, password)
	    })
  	}

  	svc.checkUser = function () {
  		if ($window.sessionStorage.token) {   				 
			$http.defaults.headers.common['X-Auth'] = $window.sessionStorage.token
			return svc.getUser()
		}
  	}

})