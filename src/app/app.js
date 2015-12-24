angular.module( 
	'angularApp', 
	[
		'templates-app',
		'templates-common',
		'angularApp.header',
		'angularApp.home',
		'angularApp.about',
		'ngAnimate',
		'ngRoute'
	]
)
.config(function configRoutes ($routeProvider) {

	'use strict';
	// Routes
	$routeProvider
		.when('/', {
			templateUrl: 'home/home.tpl.html',
			controller: 'HomeController',
			title:'Home',
			publicAccess: false
		})
		.when('/testStack', {
			templateUrl: 'test-stack/test-stack.tpl.html',
			controller: 'TestStackController',
			title:'testStack.io',
			publicAccess: false
		})
		.when('/monitorStack', {
			templateUrl: 'monitor-stack/monitor-stack.tpl.html',
			controller: 'MonitorStackController',
			title:'monitorStack.io',
			publicAccess: false
		})
		.when('/home', {
			templateUrl: 'home/home.tpl.html',
			controller: 'HomeController',
			title:'stackTools.io',
			publicAccess: true
		})
		.otherwise({
			redirectTo: function (route, path, search) {
				var redirectUrl = '/';

				// Preserve query string on redirect.
				if (search) {
					var searchParams = Object.keys(search).map(function (paramName) {
						return paramName + '=' + search[paramName];
					}).join('&');
					if (searchParams) {
						redirectUrl += '?' + searchParams;
					}
				}

				return redirectUrl;
			}
		});

	return;

})
.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | angularApp' ;
    }
  });
})

;

