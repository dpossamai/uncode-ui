(function() {
	angular.module('com.sec21.controller.navigation', ['com.sec21.service.login']).controller(
			'NavigationCtrl', NavigationController)

	function NavigationController($scope,$rootScope,$state, LoginService,localStorageService,TeamService) {
		console.log("NAVIGATION CONTROLLER INSTANTIATED!");
		$scope.goProfile = _goProfile;
		$scope.goHome = _goHome;
		$scope.showModal = _showLoginModal;
		$scope.logout = _logout;
		$scope.teams = [];
		$scope.currentStateName = $state.current.name;
		
		function _goProfile(){
			$state.go("profile");
		}
		
		function _goHome(){
			$state.go("home");
		}
		
		function _showLoginModal() {
			LoginService.loginModal().then(function(modal) {
	        	console.log(modal);
	            modal.element.modal();
	            modal.close.then(function(result) {
	            	console.log('You said ' + result);
	            });
	        }).catch(function(error) {
	        	  // error contains a detailed error message.
	        	  console.log(error);
	        });
		}
		
		function _logout(){
			LoginService.logout().
				then(function successCallback(response) {
					localStorageService.remove("user");
					$rootScope.currentUser = null;
					$rootScope.authenticated = false;
					$state.go("home");
				}, function errorCallback(response) {
					console.log("Error Logout");
					console.log(response);
				});
		}
		
	}

})();