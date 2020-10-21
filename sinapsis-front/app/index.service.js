(function () {
    "use strict";

    angular.module('sinapsisApp')
        .service('IndexService', indexService);

    indexService.$inject = ['$http', 'constantes', 'helperFactory'];

    function indexService($http, constantes, helper) {
        return {
            exemplo: exemplo,
            logar: logar,
            cadastrar: cadastrar
        }

        function exemplo() {
            return $http.get(constantes.URL_BASE)
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function logar(_params) {
            return $http.post(constantes.URL_BASE1 + '/login', _params)
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function cadastrar(_params) {
            return $http.post(constantes.URL_BASE + '/register', _params)
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }
    }


})();