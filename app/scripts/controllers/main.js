'use strict';


define([ 'angular' ], function() {

  var main = angular.module('yaas.main', []);

  main.controller('MainCtrl', function($scope, $yaasTranslate, siteConfig) {
    $scope.mainTitle = "MAIN Title";
	});
  
	
});