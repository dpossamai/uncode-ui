(function() {
	angular.module('com.sec21.service.login', ['base64', 'angularModalService']).service('LoginService',
			LoginService)

	function LoginService($http, $base64, ModalService) {
		var vm = {};
		vm.login = _login;
		vm.loginModal = _loginModal;
		vm.logout = _logout;
		vm.encodeAuthBasic = _encodeAuthBasic;
		vm.decodeAuthBasic = _decodeAuthBasic;

		function _login(username, password) {
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
		
		function _encodeAuthBasic(username, password){
			return $base64.encode(username + ":"+password);
		}
		
		function _decodeAuthBasic(basic){
			 return $base64.decode(basic);
		}
		
		return vm;
	}

})();