angular
		.module('com.sec21.config', [ 'ui.router','ngRoute' ])
		.config(
				function($stateProvider,$urlRouterProvider, $httpProvider) {
					$urlRouterProvider.otherwise("home");
					$stateProvider.state('home', {
						url : '/uncode-server/home',
						views : {
							"content" : {templateUrl: "/scripts/navigation/home.html", controller: "HomeCtrl"},
							"header" : {templateUrl:"/scripts/header/header.html",controller: "NavigationCtrl"}
						},
						data : {requireLogin : false}
					}).state('login', {
						url: '/uncode-server/login',
						templateUrl : '/scripts/login/login.html',
						data : {requireLogin : false}
					});
					
					$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
})