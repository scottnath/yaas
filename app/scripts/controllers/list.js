'use strict';


define([ 'angular' ], function() {

  var listThings = angular.module('yaas.listThings', ['yaas.translate']);

  listThings.directive('thingsTable', function() {
      return {
          restrict: 'E',
          templateUrl: '/views/partials/things-table.html'
      };
  });
  
  listThings.controller('ThingsCtrl', function($scope, $yaasTranslate, siteConfig) {
	  $scope.things = [
			  { id: 123, name: 'Thing ONE' },
			  { id: 234, name: 'Thing TWO' },
			  { id: 345, name: 'Thing THREE' }
    ];
	});
  
	
});