'use strict';

define([ 'angular' ], function() {
    var translate = angular.module('yaas.translate', [ 'pascalprecht.translate' ]);
    translate.service('translationMap', function() {
        return {
            THING_NAME_TITLE: 'Thing',
            THING_ID_TITLE: 'ID'
        };
    });
    translate.provider('$yaasTranslate', function($translateProvider) {
        this.$get = function(translationMap) {
            $translateProvider.translations(translationMap);
            $translateProvider.preferredLanguage('en');
        };
    });
});