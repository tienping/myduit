(function() {
    'use strict';
    var myduitApp = angular.module('myduitApp', ['ui.router']);

    myduitApp
        .config(myduitConfig)
        .controller('myduitCtrl', myduitCtrl);

    myduitConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function myduitConfig($stateProvider, $urlRouterProvider) {
        var lang = getCookie('tp-lang') || 'en';

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'pages/home/home-' + lang + '.html'
        })
        .state('loantypes', {
            url: '/loantypes',
            templateUrl: 'pages/loantypes/loantypes-' + lang + '.html'     
        })
        .state('apply', {
            url: '/apply',
            templateUrl: 'pages/apply/apply-' + lang + '.html'     
        });

    }

    myduitCtrl.$inject = [];
    function myduitCtrl() {
        var myduit = this;
        
        myduit.init           = init;
        myduit.openModal      = openModal;
        myduit.toggleLanguage = toggleLanguage;
        myduit.currentLanguage = getCookie('tp-lang') || 'en';

        // myduit.data      = {
        //     en: {},
        //     bm: {}
        // }
        // loadJSON('assets/fixture-en.json', function(response) {
        //     myduit.data.en = JSON.parse(response);
        // });
        // loadJSON('assets/fixture-bm.json', function(response) {
        //     myduit.data.bm = JSON.parse(response);
        // });
        // myduit.lang      = myduit.lang || 'en';

        function init() {
            var offsetValue = 50;
            initializeSmoothScroll(offsetValue);
        }

        function openModal(id) {
            $('#' + id).modal('show');
        }

        function toggleLanguage(lang) {
            setCookie("tp-lang", lang, 3);
            location.reload();
        }
    }
})();