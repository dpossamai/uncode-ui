(function() {
	angular.module('com.sec21.controller.navigation', ['com.sec21.service.login']).controller(
			'NavigationCtrl', NavigationController)

	function NavigationController($scope,$rootScope,$state, LoginService,localStorageService) {
		var vm = {};
		vm.showLoginModal = _showLoginModal;
		$scope.showModal = _showLoginModal;
		$scope.logout = _logout;
		$scope.goProfile = _goProfile;
		
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
		
		function _goProfile(){
			$state.go("profile");
		}
		
		return vm;
	}

})();