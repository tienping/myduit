(function() {
    'use strict';
    var myduitApp = angular.module('myduitApp', ['ui.router']);

    myduitApp.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'pages/home/home-en.html'
        })
        .state('loantypes', {
            url: '/loantypes',
            templateUrl: 'pages/loantypes/loantypes-en.html'     
        })
        .state('apply', {
            url: '/apply',
            templateUrl: 'pages/apply/apply-en.html'     
        });

    }).controller('myduitCtrl', myduitCtrl);

    myduitCtrl.$inject = [];

    function myduitCtrl() {
        var myduit = this;
        
        myduit.init      = init;
        myduit.openModal = openModal;
        
        function init() {
            var offsetValue = 50;
            initializeSmoothScroll(offsetValue);
        }

        function openModal(id) {
            $('#' + id).modal('show');
        }
    }
})();