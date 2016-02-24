angular.module('adtv', ['ui.router', 'oc.lazyLoad'])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
        function($stateProvider,
            $urlRouterProvider,
            $ocLazyLoadProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('app', {
                    abstract: true,
                    templateUrl: 'templates/layout/content.html',
                    resolve: {
                    	'deps' : function($ocLazyLoad){
                    		return $ocLazyLoad.load([
                                // 'app/directives.js'
                    		]);
                    	}
                    }
                })
                .state('app.home', {
                    url: '/',
                    templateUrl: 'templates/home.html'
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
                .state('app.devices', {
                    url: '/devices',
                    abstract: true,
                    template: '<div ui-view></div>'
                })
                .state('app.devices.index', {
                    url: '/index',
                    templateUrl: 'templates/devices/index.html'
                })
                .state('app.plan', {
                    url: '/plan',
                    templateUrl: 'templates/purchase/plan.html'
                })
                .state('app.order', {
                    url: '/order',
                    templateUrl: 'templates/purchase/order.html'
                })
                .state('app.finance', {
                    url: '/finance',
                    templateUrl: 'templates/purchase/log.html'
                })
                .state('app.logs', {
                    url: '/logs',
                    templateUrl: 'templates/log/index.html'
                })
        }
    ])
    .run(function($rootScope, $state) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
        	// console.log('to: ', toState);
        });
    });
