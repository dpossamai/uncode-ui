(function() {
	angular.module('com.sec21.service.login', ['base64', 'angularModalService']).service('LoginService',
			LoginService)

	function LoginService($http, $base64, $state, ModalService, localStorageService) {
		var vm = {};
		vm.login = _login;
		vm.loginModal = _loginModal;
		vm.logout = _logout;

		function _login(username, password) {
			console.log('Making login!');
			//TODO choose a authentication method
			return $http({
				method : 'GET',
				url : '/uncode-server/user',
				headers: {'Authorization' : 'Basic '+$base64.encode(username + ":"+password)}
			});
		}
		
		function _loginModal(){
			return ModalService.showModal({
	            templateUrl: '/scripts/login/login.html',
	            controller: 'LoginCtrl'
	        });
		}
		
		function _logout(){
			console.log("logout");
			return $http({
				method : 'GET',
				url : '/uncode-server/logout'
			});
		}
		
		return vm;
	}

})();