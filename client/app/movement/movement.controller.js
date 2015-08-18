"use strict";

myApp.controller('movementListCtrl', ['$scope', 'steps', function mainCtrl ($scope, steps) {

    steps.getMovements(function (err, ret) {
        if (ret) {
            $scope.movements = ret;
        }
    });
}]);

myApp.controller('movementShowCtrl', ['$scope', '$location', '$stateParams', 'steps', function mainCtrl ($scope, $location, $stateParams, steps) {

    var mId = $stateParams.mId;

    steps.getMovements(function (err, ret) {
        if (ret) {
            $scope.movement = ret[mId];
        }
    });

    steps.getStepsBymID(mId, function (err, ret) {
        if (ret) $scope.steps = ret;
    });

    // $scope.movement = movement;
    // $scope.steps = dsteps;
    // $scope.actions = actions;
}]);
