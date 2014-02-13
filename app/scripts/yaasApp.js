'use strict';

define([
	'angular',
	'angularResource',
	'angularRoute',
	'angularMocks',
	'angularTranslate',
	'yaasTranslate',
	'yaasMain',
	'yaasListThings'
],
	function() {
	
		var yaas = angular.module('yaasApp', [
			'ngRoute',
			'yaas.main',
			'yaas.listThings',
			'yaas.translate'
		]);
		
		
    //////////////////////////////
    // Route Configuration for Angular Activity Tracker
    //
    // - $routeProvider: Allows for configuration of routes
    // - $locationProvider: Allows for configuration of routing strategy
    //////////////////////////////
	  yaas.config(function ($routeProvider) {
	    $routeProvider
	      .when('/', {
	        templateUrl: 'views/main.html',
	        controller: 'MainCtrl'
	      })
	      .when('/list', {
	        templateUrl: 'views/list.html',
	        controller: 'ThingsCtrl'
	      })
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
    //////////////////////////////
    // Factory for site configuration
    //////////////////////////////
    yaas.factory('siteConfig', function ($http, $yaasTranslate) {
    
    });

	});