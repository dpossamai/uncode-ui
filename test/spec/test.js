(function() {
	'use strict';

	describe("Test login service", function() {
		beforeEach(module("sec21"));

		var LoginService;
		var httpBackend;
		var authRequestHandler;

		beforeEach(inject(function(_LoginService_, $httpBackend) {
			LoginService = _LoginService_;
			httpBackend = $httpBackend;
		}));

		it("should do something", function() {
			expect("").toEqual(LoginService.login('user','password'));
		});
		
		it('should demonstrate using when (200 status)', inject(function($http) {
			  
			  var $scope = {};

			  /* Code Under Test */
			  $http.get('http://localhost:8080/user')
			    .success(function(data, status, headers, config) {
			      $scope.valid = true;
			      $scope.response = data;
			    })
			    .error(function(data, status, headers, config) {
			      $scope.valid = false;
			  });
			  /* End */

			  httpBackend
			    .when('GET', 'http://localhost:8080/user')
			    .respond(200, { foo: 'bar' });

			  httpBackend.flush();

			  expect($scope.valid).toBe(true);
			  expect($scope.response).toEqual({ foo: 'bar' });

			}));

	});
})();
