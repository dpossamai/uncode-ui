(function() {
	'use strict';

	describe("Test login service", function() {
		beforeEach(module("sec21"));

		var LoginService;
		var httpBackend;

		beforeEach(inject(function(_LoginService_, $httpBackend) {
			LoginService = _LoginService_;
			httpBackend = $httpBackend;
		}));

		it("should do something", function() {
			expect("").toEqual(LoginService.login('user','password'));
		});

	});
})();
