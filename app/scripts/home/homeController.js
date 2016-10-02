(function() {
	angular.module('com.sec21.controller.home', ['com.sec21.service.login']).controller(
			'HomeCtrl', HomeController)

	function HomeController($scope,$rootScope,$state, LoginService,localStorageService,TeamService) {
		console.log("HOME CONTROLLER INSTANTIATED!");
		$scope.searchTeam = _searchTeam;
		$scope.$watch(function () { return TeamService.teams; },
		        function (data) {
		 			$scope.teams = TeamService.teams;
		 		},
		        true
		);
		
		
		function _searchTeam(){
			console.log($state);
			TeamService.searchTeam($scope.teamName);
		}
		
		
		$scope.teste = function teste(){
			return 90;
		}
	}

})();