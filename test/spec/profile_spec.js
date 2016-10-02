(function() {
	'use strict';

	describe("Test Profile Service", function() {
		beforeEach(module("com.sec21.service.profile"));

		var ProfileService;
		var $httpBackend;

		beforeEach(inject(function(_ProfileService_, $injector) {
			ProfileService = _ProfileService_;
			$httpBackend = $injector.get('$httpBackend');
		}));

		xit('should return the logged profile', inject(function($http) {
			var $scope = {};

			TeamService.getProfile().success(
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

			$httpBackend.when('GET', '/uncode-server/profile?name=null')
					.respond(200, [{"id":1,"name":"team1","emblem":null},{"id":2,"name":"team2","emblem":null},{"id":3,"name":"team3","emblem":null}]);

			$httpBackend.flush();

			expect($scope.valid).toBe(true);
			expect($scope.response).toEqual([{}]);
			expect($scope.status).toEqual(200);

		}));

	});
})();
