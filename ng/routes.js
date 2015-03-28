app.config(function ($routeProvider) {
	$routeProvider
	.when('/', { controller: 'QuestionsCtrl', templateUrl: 'questions.html' })
	.when('/login', { controller: 'LoginCtrl', templateUrl: 'login.html' })
	.when('/ask', { controller: 'QuestionsCtrl', templateUrl: 'ask.html' })
	.when('/register', { controller: 'RegisterCtrl', templateUrl: 'register.html' })
})