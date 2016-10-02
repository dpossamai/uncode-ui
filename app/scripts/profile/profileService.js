(function() {
	angular.module('com.sec21.service.profile', []).service('ProfileService',
			ProfileService)

	function ProfileService($http) {
		var vm = {};
		vm.getProfile = _getProfile;
		
		function _getProfile(){
			
		}
		
		
		return vm;
	}

})();