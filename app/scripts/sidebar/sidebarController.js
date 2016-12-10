(function() {
	angular.module('com.sec21.controller.sidebar',[]).controller(
			'SideBarCtrl', SideBarController)

	function SideBarController($scope) {
		console.log("Sidebar CONTROLLER INSTANTIATED!");
	}

})();