'use strict';

myApp.controller('movementShowCtrl', ['$scope', '$location', '$stateParams', function mainCtrl ($scope, $location, $stateParams) {

    var id = $stateParams.id;

    var movement = {
        "1": {
          "name": "俯卧撑",
          "position": 1,
          "nameEn": "Push Up",
          "muscleGroup": "",
          "description": ""
        },
        "2": {
          "name": "",
          "position": 1,
          "nameEn": "Push Up",
          "muscleGroup": "",
          "description": ""
        }
    };

    $scope.movement = movement[id];
}]);
