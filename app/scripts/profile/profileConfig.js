angular
		.module('com.sec21.config.profile', [ 'ui.router','ngRoute' ])
		.config(
				function($stateProvider,$urlRouterProvider, $httpProvider) {
					$stateProvider.state('profile', {
						url : '/uncode-server/profile',
						views : {
							"content" : {templateUrl: "/scripts/profile/profile.html"},
							"header" : {templateUrl:"/scripts/header/header.html"}
						},
						controller : 'ProfileCtrl',
						data : {requireLogin : true}
					});
					$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
})