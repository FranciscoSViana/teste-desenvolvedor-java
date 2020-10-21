(function () {
    "use strict";

    angular.module('sinapsisApp')
        .config(routes)
        .run(configDefaults);

    routes.$inject = ['$routeProvider'];
    configDefaults.$inject = ['$rootScope'];

    function routes($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/login'
            })
            .when('/home', {
                templateUrl: 'acesso/home.tpl.html',
            })
            .when('/login', {
                templateUrl: 'acesso/login.tpl.html',
            })
            .when('/register', {
                templateUrl: 'acesso/register.tpl.html'
            })
            .when('/subestacoes', {
                templateUrl: 'subestacoes/listar.tpl.html'
            })
            .when('/gerenciar/subestacoes', {
                templateUrl: 'subestacoes/subestacoes.tpl.html'
            })
            .when('/gerenciar/subestacoes/new', {
                templateUrl: 'subestacoes/formulario.tpl.html'
            })
            .when('/gerenciar/subestacoes/editar/:id', {
                templateUrl: 'subestacoes/formulario.tpl.html'
            })
            .when('/redes', {
                templateUrl: 'redes/listar.tpl.html'
            })
            .when('/gerenciar/redes', {
                templateUrl: 'redes/redes.tpl.html'
            })
            .when('/gerenciar/redes/new', {
                templateUrl: 'redes/formulario.tpl.html'
            })
            .when('/gerenciar/redes/editar/:id', {
                templateUrl: 'redes/formulario.tpl.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }

    function configDefaults($rootScope) {
        $rootScope.listaMensagens = [];
    }


})();