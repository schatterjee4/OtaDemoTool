define([
    'lodash'
], function (
    _
) {
    'use strict';

    ResultsPageCtrl.$inject = ['$scope', 'LastSearchCriteriaService', 'LastSelectedItineraryService', 'ClipboardService'];
    function ResultsPageCtrl($scope, LastSearchCriteriaService, LastSelectedItineraryService, ClipboardService) {
        $scope.newSearchCriteria = LastSearchCriteriaService.get();
        $scope.itinerarySelectedCallback = function (itin) {
            LastSelectedItineraryService.set(itin);
            var itinJsonObj = angular.copy(itin); // doing angular.copy and not _.extend/merge, so that the $$hashKey property is not copied. $$hashKey property is added by ng-repeat (when there is not explicit track by) and it is (unique..) hash, different with every render. So from two views, based by same model we will get objects with different $$hashKey. We have to remove it so that later we do not have problems with equality comparisons (like when removing)
            ClipboardService.add('itinerary', itinJsonObj);
        };
        $scope.searchStartedCallback = function(searchCriteria) {
            $scope.searchInProgress = true;
            $scope.searchInProgressParams = {
                origin: searchCriteria.getFirstLeg().origin,
                destination: searchCriteria.getFirstLeg().destination
            };
        };
        $scope.searchCompletedSuccessCallback = function(itins) {
            $scope.searchInProgress = false;
        };
        $scope.searchCompletedErrorCallback = function(errMessages) {
            $scope.searchInProgress = false;
        }
    }
    return ResultsPageCtrl;
});