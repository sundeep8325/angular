angular.module( 
	'angularApp', 
	[
		'templates-app',
		'templates-common',
		'angularApp.config',
		'angularApp.header',
		'angularApp.home',
		'angularApp.about',
		'ngAnimate',
		'ngRoute',
		'pascalprecht.translate',
		'restangular'
	]
)
.config(function configRoutes ($routeProvider,$locationProvider,$translateProvider,RestangularProvider,baseUrl) {

	'use strict';
	// Routes
	$routeProvider
		.when('/', {
			templateUrl: 'home/home.tpl.html',
			controller: 'HomeController',
			pageTitle:'Home',
			publicAccess: false
		})
		.when('/about', {
			templateUrl: 'about/about.tpl.html',
			controller: 'AboutController',
			pageTitle:'About',
			publicAccess: false
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
		//check browser support
       /*  if(window.history && window.history.pushState){
			$locationProvider.html5Mode({
				enabled: true,
				requireBase: false
			});
        } */
		RestangularProvider.setBaseUrl(baseUrl);
	return;

})
.config(function configI18n ($translateProvider, englishTranslationsProvider,frenchTranslationsProvider) {
	'use strict';
	// Enable escaping of HTML
	$translateProvider.useSanitizeValueStrategy('escape');
	// i18n
	$translateProvider.translations('en', englishTranslationsProvider.labels);
	$translateProvider.translations('fr', frenchTranslationsProvider.labels);
	$translateProvider.preferredLanguage('fr');

	return;
})
.run(function afterConfig ($location, $rootScope, $route, $timeout, $http) {

	'use strict';
	$http.defaults.headers.common.Accept = 'application/json';
	
	// Avoid anonymous users to skip login
	$rootScope.$on('$routeChangeStart', function (event, newUrl, oldUrl) {
		return;

	});
	$rootScope.$on('$routeChangeSuccess', function(event, currentRoute , previousRoute ){
		//Change page title, based on Route information
		if (currentRoute.hasOwnProperty('$$route')) {
            $rootScope.pageTitle = currentRoute.$$route.pageTitle;
        }
	});
	return;
});

