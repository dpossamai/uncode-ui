(function() {
	'use strict';

	describe("Test login service", function() {
		var LoginService;
		var $httpBackend;
		var authRequestHandler;
		var $homeController;
		var myVar;
		var $scope;

		beforeEach(function(){
			module('sec21');
		});
		
		beforeEach(inject(function($rootScope, $controller, $injector) {
			$scope = $rootScope.$new();
			$httpBackend = $injector.get('$httpBackend');
			 $homeController = $controller("LoginCtrl",{
				 $scope : $scope
			 })
		}));
		
		xit("test login promise", inject(function($http) {
			var $scope = {};

			var username = 'dpossamai';
			var password = '123';
			var requestHeaders = {
				'Authorization' : 'Basic '
						+ LoginService.encodeAuthBasic(username, password),
				'Accept' : 'application/json, text/plain, */*'
			};
			var request = LoginService.login(username, password).success(
					function(data, status, headers, config) {
						$scope.valid = true;
						$scope.response = data;
						$scope.headers = headers;
					}).error(function(data, status, headers, config) {
				$scope.valid = false;
			});

			var userResponseJSON = {
				"details" : {
					"remoteAddress" : "0:0:0:0:0:0:0:1",
					"sessionId" : "95D4F1ECD573AF415AD2D28A8A7E9DC1"
				},
				"authorities" : [ {
					"authority" : "ROLE_ADMIN"
				}, {
					"authority" : "ROLE_USER"
				} ],
				"authenticated" : true,
				"principal" : {
					"password" : null,
					"username" : "dpossamai",
					"authorities" : [ {
						"authority" : "ROLE_ADMIN"
					}, {
						"authority" : "ROLE_USER"
					} ],
					"accountNonExpired" : true,
					"accountNonLocked" : true,
					"credentialsNonExpired" : true,
					"enabled" : true
				},
				"credentials" : null,
				"name" : "dpossamai"
			};
			$httpBackend.when('GET', '/uncode-server/user', null,
					requestHeaders, null).respond(
					200,
					userResponseJSON,
					{
						'Authorization' : 'Basic '
								+ LoginService.encodeAuthBasic(username,
										password)
					});

			$httpBackend.flush();

			expect($scope.valid).toBe(true);
			expect($scope.response.principal.authorities).toEqual([ {
				"authority" : "ROLE_ADMIN"
			}, {
				"authority" : "ROLE_USER"
			} ]);
		}));

		xit('should demonstrate using when (200 status)',
				inject(function($http) {

					var $scope = {};

					/* Code Under Test */
					$http.get('http://localhost:8080/uncode-server/user')
							.success(function(data, status, headers, config) {
								$scope.valid = true;
								$scope.response = data;
							}).error(function(data, status, headers, config) {
								$scope.valid = false;
							});
					/* End */

					$httpBackend.when('GET',
							'http://localhost:8080/uncode-server/user')
							.respond(200, {
								foo : 'bar'
							});

					$httpBackend.flush();

					expect($scope.valid).toBe(true);
					expect($scope.response).toEqual({
						foo : 'bar'
					});

				}));

		xit('should demonstrate error unauthorized (401)', inject(function(
				$http) {
			var $scope = {};

			var username = 'dpossamai';
			var password = 'wrongpassword';
			var requestHeaders = {
				'Authorization' : 'Basic '
						+ LoginService.encodeAuthBasic(username, password),
				'Accept' : 'application/json, text/plain, */*'
			};
			LoginService.login(username, password).success(
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

			$httpBackend.when('GET', '/uncode-server/user', null,
					requestHeaders, null).respond(401, null);

			$httpBackend.flush();

			expect($scope.valid).toBe(false);
			expect($scope.response).toEqual(null);
			expect($scope.status).toEqual(401);

		}));

		it('should demonstrate error in username Field', inject(function(
				$http) {
			$scope.username = null;
			$scope.password = "12345";
			expect(['username_required']).toEqual($scope.validateFields());
		}));
		
		it('should demonstrate error in password Field', inject(function(
				$http) {
			$scope.username = 'maxwell junior';
			$scope.password;
			expect(['password_required']).toEqual($scope.validateFields());
		}));
		
		it('should not demonstrate error in any Field', inject(function(
				$http) {
			$scope.username = 'maxwell junior';
			$scope.password = 'mypassword';
			expect([]).toEqual($scope.validateFields());
		}));

	});
})();
