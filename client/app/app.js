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
          .state('article', {
              url: '/article',
              templateUrl: 'app/article/article.html',
              controller: function (argument) {
              }
          })
    });
