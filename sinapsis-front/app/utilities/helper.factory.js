(function () {
    "use strict";

    angular.module('sinapsisApp')
        .factory('helperFactory', helperFactory);

    helperFactory.$inject = ['$rootScope', '$location', 'constantes', 'capitalizeFilter'];

    function helperFactory($rootScope, $location, constantes, capitalize) {

        return {
            addMsg: addMsg,
            setRootScope: setRootScope,
            getRootScope: getRootScope,
            sendError: sendError,
            path: path,
            go: go
        }

        function addMsg(_msg, _tipo, _acao) {
            var lastMsg = $rootScope.listaMensagens.length ?
                $rootScope.listaMensagens[$rootScope.listaMensagens.length - 1] : { text: '' };

            if (lastMsg.text !== _msg) {
                $rootScope.listaMensagens.push({
                    text: _msg ? _msg : constantes.MSG_ERRO,
                    tipo: _tipo ? _tipo : 'info',
                    acao: _acao ? _acao : ''
                });
            }
        }

        function path(_path) {
            $rootScope.listaMensagens = [];
            return _path ? $location.path(_path) : $location.path();
        }

        function setRootScope(_key, _obj) {
            $rootScope[_key] = _obj;
        }

        function getRootScope(_key) {
            return $rootScope[_key];
        }

        function sendError(_error) {
            return { error: true, msg: _error.data.message };
        }

        function go(_path) {
            $rootScope.listaMensagens = [];

            var path = _path ? _path : $location.path();
            if (path === '/login' || path === '/register') {
                $location.path(path);
            } else {
                isLoggedIn(path);
            }

            $rootScope.page = setPage();

            function isLoggedIn(_path) {
                if ($rootScope.userLogged) {
                    $location.path(_path);
                } else {
                    $location.path('/login');
                    addMsg(constantes.MENSAGENS.SEM_ACESSO, 'danger', 'Faça o login.')
                }
            }

            function setPage() {
                var page = $location.path().substring(1);
                if (page.indexOf('/') === -1) return page;
                var arr = page.split('/');
                return capitalize(arr[0]) + '|' + capitalize(arr[1]);
            }
        }
    }

})();