angular.module('com.sec21.config', [ 'ngRoute','ui.router' ])
  .config(function($routeProvider, $stateProvider, $httpProvider) {

    $routeProvider.when('/', {
      templateUrl : '/scripts/navigation/home.html',
      controller : 'NavigationCtrl',
      controllerAs: 'controller'
    }).when('/login', {
      templateUrl : '/scripts/login/login.html',
      controller : 'NavigationCtrl',
      controllerAs: 'controller'
    }).otherwise('/');

    $stateProvider.state('home', {
    	  templateUrl:'/scripts/navigation/home.html',
    	  controller:'NavigationCtrl',
    	  params: {
    	    'referer': 'some default', 
    	    'param2': 'some default', 
    	    'etc': 'some default'
    	  }
    });
    
    
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

  })