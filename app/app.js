angular.module('adtv', ['ui.router', 'oc.lazyLoad'])
	.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', 
		function ($stateProvider,
        $urlRouterProvider,
        $ocLazyLoadProvider) {
		
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('app', {
				abstract: true,
				templateUrl: 'templates/layout/content.html'
			})
			.state('app.home', {
				url : '/home'
			})
			.state('app.users', {
				url: '/users', 
				templateUrl: 'templates/users/index.html'
			})
			.state('app.admin', {
				url: '/admin',
				templateUrl: 'templates/users/admin.html'
			})
			.state('app.superadmin', {
				url: '/superadmin',
				templateUrl: 'templates/users/superadmin.html'
			})
			.state('app.customer', {
				url: '/customer',
				templateUrl: 'templates/users/customer.html'
			})
			.state('app.plan', {
				url: '/plan',
				templateUrl: 'templates/purchase/plan.html'
			})
			.state('app.order', {
				url: '/order',
				templateUrl: 'templates/purchase/order.html'
			})
	}]);

