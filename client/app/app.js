"use strict";

var myApp = angular.module('qiutujs', ['ui.router'])

    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

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
              templateUrl: 'app/article/article_list.html',
              controller: 'articleListCtrl'
          })
          .state('articleShow', {
              url: '/article/:aId',
              templateUrl: 'app/article/article_show.html',
              controller: 'articleShowCtrl'
          })
          .state('movementList', {
              url: '/movement',
              templateUrl: 'app/movement/movement_list.html',
              controller: 'movementListCtrl'
          })
          .state('movementShow', {
              url: '/movement/:mId',
              templateUrl: 'app/movement/movement_show.html',
              controller: 'movementShowCtrl'
          })
          .state('setp', {
              url: '/movement/:mId/step/:sId',
              templateUrl: 'app/step/step.html',
              controller: 'stepCtrl'
          });
    }]);
