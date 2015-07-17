'use strict';

var myApp = angular.module('qtbody', ['ui.router'])

    .config(function ($urlRouterProvider, $stateProvider) {

      $urlRouterProvider
        .otherwise('/');

      $stateProvider
          .state('main', {
              url: '/',
              templateUrl: 'app/main/main.html',
              controller: 'mainCtrl'
          })
          .state('articleList', {
              url: '/article',
              templateUrl: 'app/article/article.html',
              controller: 'articleCtrl'
          })
          .state('movementList', {
              url: '/movement',
              templateUrl: 'app/movement/movement.html',
            //   controller: 'movementListCtrl'
          })
          .state('movementShow', {
              url: '/movement/:id',
              templateUrl: 'app/movement/movement_show.html',
              controller: 'movementShowCtrl'
          })
    });
