(function() {
	angular.module('com.sec21.service.team',[]).factory('TeamService',
			TeamService)

	function TeamService($http) {
		var vm = {};
		vm.searchTeam = _searchTeam;
		vm.teams = [];

		function _searchTeam(name) {
			$http({
				method : 'GET',
				url : '/uncode-server/searchTeam?name=' + name,
			}).success(function(response){
				console.log(response);
				vm.teams = response;
			}).error(function(data){
				
			});
		}
		return vm;
	}

})();