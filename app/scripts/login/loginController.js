(function() {
angular.module('com.sec21.controller.login', ['com.sec21.service.login']).controller('LoginCtrl', LoginController)
		
		
	function LoginController($rootScope,$element,$scope,$state,localStorageService, LoginService, close) {
		var vm = {};
		vm.username = $scope.username;
		vm.password = $scope.password;
		vm.close = _close;
		$scope.close = _close;
		$scope.error = false;
		$scope.errorMessage = 'ERROR MESSAGE';
		
		function _close(result){
			console.log(result);
			if(result == 'Yes'){
				console.log("aqui");
				LoginService.login($scope.username, $scope.password).
				then(function successCallback(response) {
					localStorageService.set("user",response);
					$rootScope.currentUser = response;
					$rootScope.authenticated = true;
					$element.modal('hide');
					close(result, 500); // close, but give 500ms for bootstrap to animate]
					$state.go("profile");
				}, function errorCallback(response) {
					$scope.error = true;
					$scope.errorMessage = response.statusText;
				});
			}
		}
	}
	

})();