// 'use strict';

myApp.config(function ($stateProvider) {
        $stateProvider
            .state('movement1', {
                url: '/movement3',
                templateUrl: 'app/movement/movement.html',
                controller: 'movementCtrl'
            }).state('movement2', {
                url: '/movement2',
                templateUrl: 'app/movement/movement2.html',
                controller: 'movementCtrl'
            });
    });