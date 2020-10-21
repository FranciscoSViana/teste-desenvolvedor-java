(function () {
    "use strict";

    angular.module('sinapsisApp')
        .service('subestacaoService', subestacaoService);

    subestacaoService.$inject = ['$http', 'constantes', 'helperFactory'];

    function subestacaoService($http, constantes, helper) {
        return {
            listar: listar,
            cadastrar: cadastrar,
            consultar: consultar,
            editar: editar,
            deletar: deletar
        }

        function listar() {
            return $http.get(constantes.URL_BASE + '/subestacoes')
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function cadastrar(_param) {
            return $http.post(constantes.URL_BASE + '/subestacoes', _param)
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function consultar(_id) {
            return $http.get(constantes.URL_BASE + '/subestacoes/' + _id)
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function editar(_param) {
            return $http.put(constantes.URL_BASE + '/subestacoes/' + _param._id, _param)
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function deletar(_id) {
            return $http.delete(constantes.URL_BASE + '/subestacoes/' + _id)
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.data);
        }
    }

})();