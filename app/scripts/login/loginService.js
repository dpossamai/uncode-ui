(function() {
	angular.module('com.sec21.service.login', ['base64']).service('LoginService',
			LoginService)

	function LoginService($http,$base64) {
		var vm = {};
		vm.login = _login;

		function _login(username, password) {
			console.log('Making login!');
			//TODO choose a authentication method
			$http({
				method : 'POST',
				url : '/someUrl',
			}).then(function successCallback(response) {
				console.log(response);
			}, function errorCallback(response) {
				console.log(response);
			});
		}
		
		function setAuthentication(){
			
		}

		return vm;
	}

})();