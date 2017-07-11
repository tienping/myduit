var myduitApp = angular.module('myduitApp', ['ui.router']);

myduitApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home-en.html'
        })
        .state('loantypes', {
            url: '/loantypes',
            templateUrl: 'pages/loantypes-en.html'     
        })
        .state('apply', {
            url: '/apply',
            templateUrl: 'pages/apply-en.html'     
        });

});