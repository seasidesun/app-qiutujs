"use strict";

myApp.controller('mainCtrl', ['$scope', '$location', function mainCtrl ($scope, $location) {
    $scope.navigations = [
        { title: '个人心得', href: 'article',  pos: 'left'},
        { title: '六艺十式', href: 'movement', pos: 'middle'},
        { title: '训练计划', href: 'training', pos: 'right'}
    ];

    $scope.selectedNow = 1;

    $scope.selectNav = function (index) {
        $scope.selectedNow = index;
    };
}]);
