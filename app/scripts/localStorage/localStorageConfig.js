angular.module('com.sec21.helper.localStorage.config',['LocalStorageModule'])
		.config(function(localStorageServiceProvider) {
			localStorageServiceProvider.setStorageType('sessionStorage');
		});
  
  