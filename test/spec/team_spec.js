(function() {
	'use strict';

	describe("Test Team Service", function() {
		beforeEach(module("com.sec21.service.team"));

		var TeamService;
		var $httpBackend;

		beforeEach(inject(function(_TeamService_, $injector) {
			TeamService = _TeamService_;
			$httpBackend = $injector.get('$httpBackend');
		}));

		xit('should return a list of teams', inject(function($http) {
			var $scope = {};

			TeamService.searchTeam(null).success(
					function(data, status, headers, config) {
						$scope.valid = true;
						$scope.response = data;
						$scope.headers = headers;
						$scope.status = status;
					}).error(function(data, status, headers, config) {
				$scope.valid = false;
				$scope.status = status;
				$scope.response = data;
			});

			$httpBackend.when('GET', '/uncode-server/searchTeam?name=null')
					.respond(200, [{"id":1,"name":"team1","emblem":null},{"id":2,"name":"team2","emblem":null},{"id":3,"name":"team3","emblem":null}]);

			$httpBackend.flush();

			expect($scope.valid).toBe(true);
			expect($scope.response).toEqual([{"id":1,"name":"team1","emblem":null},{"id":2,"name":"team2","emblem":null},{"id":3,"name":"team3","emblem":null}]);
			expect($scope.status).toEqual(200);

		}));

	});
})();
