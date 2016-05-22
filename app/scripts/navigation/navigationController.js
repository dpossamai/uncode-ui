(function() {
	angular.module('com.sec21.controller.navigation', ['angularModalService']).controller(
			'NavigationCtrl', NavigationController)

	function NavigationController($scope,$rootScope,$state,ModalService) {
		var vm = {};
		vm.showLoginModal = _showLoginModal;
		$scope.showModal = _showLoginModal;
		
		function _showLoginModal() {
			
			ModalService.showModal({
	            templateUrl: '/scripts/login/login.html',
	            controller: 'LoginCtrl'
	        }).then(function(modal) {
	        	console.log(modal);
	            modal.element.modal();
	            modal.close.then(function(result) {
	            	console.log('You said ' + result);
	                $scope.message = 'You said ' + result;
	                
	            });
	        }).catch(function(error) {
	        	  // error contains a detailed error message.
	        	  console.log(error);
	        });
		}
		return vm;
		
	}

})();