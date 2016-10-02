(function() {
	angular.module('com.sec21.controller.login', [ 'com.sec21.service.login' ])
			.controller('LoginCtrl', LoginController)

	function LoginController($rootScope, $scope, $state, localStorageService,
			LoginService) {
		var vm = {};
		$scope.close = _close;
		$scope.error = false;
		$scope.errorMessage = 'ERROR MESSAGE';
		$scope.validateFields = _validateFields;

		function _doLogin() {
			if (_validateFields().length == 0) {
				LoginService.login($scope.username, $scope.password).then(
						function successCallback(response) {
							localStorageService.set("user", response);
							$rootScope.currentUser = response;
							$rootScope.authenticated = true;
							close('OK', 500); 
							// bootstrap to animate]
							$state.go("profile");
						}, function errorCallback(response) {
							$scope.error = true;
							$scope.errorMessage = response.statusText;
						});
			}
		}

		function _validateFields() {
			var errors = [];
			if ($scope.username === undefined || $scope.username === ''
					|| $scope.username === null) {
				errors.push("username_required");
			}
			if ($scope.password === undefined || $scope.password === ''
					|| $scope.password === null) {
				errors.push("password_required");
			}
			return errors;
		}

		function _close(result) {
			if (result === 'Yes') {
				_doLogin();
			} else {
//				close(result, 500);
			}
		}
	}

})();