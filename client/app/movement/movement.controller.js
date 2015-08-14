'use strict';

myApp.controller('movementListCtrl', ['$scope', function mainCtrl ($scope) {

    var movements = [
        {
            'name': '俯卧撑',
            'position': 1,
            'img': 'http://www.tinengwang.com/uploads/allimg/130717/1-130GGH400509.jpg'
        }
    ];

    $scope.movements = movements;
}]);

myApp.controller('movementShowCtrl', ['$scope', '$location', '$stateParams', 'steps', function mainCtrl ($scope, $location, $stateParams, steps) {

    var mId = $stateParams.mId;

    steps.getMovements(function (err, ret) {
        if (ret) $scope.movement = ret[mId];
    });

    steps.getStepsBymID(mId, function (err, ret) {
        delete ret.id
        if (ret) $scope.steps = ret;
    });

    // $scope.movement = movement;
    // $scope.steps = dsteps;
    // $scope.actions = actions;
}]);
