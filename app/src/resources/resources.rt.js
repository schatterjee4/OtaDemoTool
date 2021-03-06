define([], function () {
    'use strict';

    return function ($stateProvider) {
        $stateProvider
            .state('resources', {
                parent: 'index',
                url: '/resources',
                views: {
                   'content': {
                        templateUrl: 'src/resources/resources.tpl.html'
                    }
                }
            })
            .state('resources.basicSearch', {
                url: '/basicSearch',
                views: {
                    'main-content@resources': {
                        templateUrl: 'src/resources/basicSearch/basicSearch.tpl.html',
                        controller: 'BasicSearchCtrl',
                        controllerAs: 'basicSearch'
                    }
                }
            })
            .state('resources.calendarNavigation', {
                url: '/calendarNavigation',
                views: {
                    'main-content@resources': {
                        templateUrl: 'src/resources/calendarNavigation/calendarNavigation.tpl.html',
                        controller: 'CalendarNavigationCtrl',
                        controllerAs: 'calendarNavigation'
                    }
                }
            })
            .state('resources.alternateDates', {
                url: '/alternateDates',
                views: {
                    'main-content@resources': {
                        templateUrl: 'src/resources/alternateDates/alternateDates.tpl.html',
                        controller: 'AlternateDatesCtrl',
                        controllerAs: 'alternateDates'
                    }
                }
            })
            .state('resources.inspirationalServices', {
                url: '/inspirationalServices',
                views: {
                    'main-content@resources': {
                        templateUrl: 'src/resources/inspirationalServices/inspirationalServices.tpl.html',
                        controller: 'InspirationalServicesCtrl',
                        controllerAs: 'inspirationalServices'
                    }
                }
            })
            .state('resources.intelligenceServices', {
                url: '/intelligenceServices',
                views: {
                    'main-content@resources': {
                        templateUrl: 'src/resources/intelligenceServices/intelligenceServices.tpl.html',
                        controller: 'IntelligenceServicesCtrl',
                        controllerAs: 'intelligenceServices'
                    }
                }
            })
            .state('resources.compare', {
                url: '/compare',
                views: {
                    'main-content@resources': {
                        templateUrl: 'src/resources/compare/compare.tpl.html',
                        controller: 'CompareCtrl',
                        controllerAs: 'compare'
                    }
                }
            })
    }
});