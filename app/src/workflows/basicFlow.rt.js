/*jshint unused: vars */
define([
    'angular',
    'angular-ui-router',
    'search/search.mod',
    'checkout/checkout.mod',
    'results/results.mod',
    'common/ui/clipboard/clipboard.mod',
    'templates.mod'
], function (
    angular,
    uiRouter,
    searchModule,
    checkoutModule,
    resultsModule,
    clipboardModule,
    templatesModule
) {
  'use strict';

  return angular
    .module('otademoToolApp', [
          'otademoToolApp.search',
          'otademoToolApp.checkout',
          'otademoToolApp.clipboard',
          'otademoToolApp.results',
          'ui.router',
          'sdsWidgets',
          'otademoToolApp.templates'
  ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('defaultHomePage', {
            url: '/defaultHomePage',
            templateUrl: 'src/search/defaultHomePage.tpl.html',
            controller: 'DefaultHomePageCtrl'
        }
        )
        .state('results', {
                url: '/results',
                templateUrl: 'src/results/results.tpl.html',
                controller: 'ResultsPageCtrl'
            }
        )
        .state('createReservation', {
              url: '/createReservation',
              templateUrl: 'src/checkout/createReservation.index.tpl.html',
              controller: 'CreateReservationCtrl'
            }
        )
        // nested states for create reservation form
        .state('createReservation.optionalServices', {
              url: '/optionalServices',
              templateUrl: 'src/checkout/optionalServices.tpl.html'
            }
        )
        .state('createReservation.travellerDataInput', {
              url: '/travellerDataInput',
              templateUrl: 'src/checkout/travellerDataInput.tpl.html'
            }
        )
        .state('createReservation.paymentDetailsInput', {
              url: '/paymentDetailsInput',
              templateUrl: 'src/checkout/paymentDetailsInput.tpl.html'
            }
        )
        .state('reservationConfirmation', {
                url: '/reservationConfirmation',
                params: {
                    reservationData: undefined,
                    itinerary: undefined
                },
                templateUrl: 'src/checkout/reservationConfirmation.tpl.html',
                controller: 'ReservationConfirmationCtrl'
            }
        )
        .state('clipboard', {
                url: '/clipboard',
                templateUrl: 'src/common/ui/clipboard/clipboard.tpl.html',
                controller: 'ClipboardCtrl'
            }
        );

        $urlRouterProvider.otherwise('/defaultHomePage');
    }]);
});