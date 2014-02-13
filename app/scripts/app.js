'use strict';

/*
change:
yaasApp = myAppNameApp
yaas = man = [abbreviatedprefix]
*/
requirejs.config({
    baseUrl: '/scripts',
    paths: {
        bower: '/bower_components',
        angular: '/bower_components/angular/angular.min',
        angularResource: '/bower_components/angular-resource/angular-resource',
        angularRoute: '/bower_components/angular-route/angular-route',
        angularMocks: '/bower_components/angular-mocks/angular-mocks',
        angularTranslate: '/bower_components/angular-translate/angular-translate.min',
				yaasTranslate: 'utils/translate',
        yaasMain: 'controllers/main',
        yaasListThings: 'controllers/list'
        
    }
});

define([ 'angular', 'yaasApp' ], function() {
    angular.bootstrap(document.getElementById('yaasApp'), [ 'yaasApp' ]);
});