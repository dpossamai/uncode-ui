var app = angular.module('sec21',
		['com.sec21.controller.navigation',
		 'com.sec21.service.login',
		 'com.sec21.config',
		 'com.sec21.controller.login',
		 'com.sec21.helper.localStorage.config',
		 'com.sec21.helper.localStorage',
		 'com.sec21.controller.profile',
		 'com.sec21.config.profile',
		 'com.sec21.service.team',
		 'com.sec21.controller.home']);

app.run(function ($rootScope, $state, LoginService) {
	
	  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
	    var requireLogin = toState.data.requireLogin;
	    console.log(requireLogin);
	    console.log(requireLogin && $rootScope.currentUser == null);
	    if (requireLogin && $rootScope.currentUser == null) {
	      event.preventDefault();
	      console.log("You are not logged in");
	      LoginService.loginModal()
	        .then(function (modal) {
	        	console.log(modal);
	            modal.element.modal();
	            modal.close.then(function(result) {
	            	console.log('You said ' + result);
	            });
	        })
	        .catch(function () {
	          return $state.go('home');
	        });
	    }
	  });
	  $state.go("home");
});