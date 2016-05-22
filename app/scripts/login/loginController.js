(function() {
angular.module('com.sec21.controller.login', ['com.sec21.service.login']).controller('LoginCtrl', LoginController)
		
		
	function LoginController($scope, LoginService, close) {
		var vm = {};
		vm.username = $scope.username;
		vm.password = $scope.password;
		vm.close = _close;
		$scope.close = _close;
		
		function _close(result){
			console.log('RECEIVED ANSWER: ');
			if(result === 'Yes'){
				LoginService.login(vm.username, vm.password);
			}
			close(result, 500); // close, but give 500ms for bootstrap to animate
		}
	}
	

})();