"use strict";

myApp.controller('stepCtrl', ['$scope', '$stateParams', '$location', 'steps', function mainCtrl ($scope, $stateParams, $location, steps) {

    var sId = $stateParams.sId;
    var mId = $stateParams.mId;

    var step = {};
    $scope.step = step;

    steps.getStepsBymID(mId, function (err, ret) {
        if (ret) step = ret[sId];
        $scope.step = step;
    });

    $scope.back = function () {
        $location.path('/movement/' + mId);
    };


}]);
