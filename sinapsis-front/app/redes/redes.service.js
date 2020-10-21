(function () {
    "use strict";

    angular.module('sinapsisApp')
        .service('redesService', redesService);

    redesService.$inject = ['$http', 'constantes', 'helperFactory'];

    function redesService($http, constantes, helper) {
        return {
            listar: listar,
            cadastrar: cadastrar,
            listarSubestacoes: listarSubestacoes,
            consultar: consultar,
            editar: editar,
            deletar: deletar
        }

        function listar() {
            return $http.get(constantes.URL_BASE + '/redes')
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function listarSubestacoes() {
            return $http.get(constantes.URL_BASE + '/subestacoes')
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function cadastrar(_param) {
            return $http.post(constantes.URL_BASE + '/redes' + _param)
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function consultar(_id) {
            return $http.get(constantes.URL_BASE + '/redes/' + _id)
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function editar(_param) {
            return $http.put(constantes.URL_BASE + '/redes/' + _param._id, _param)
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function deletar(_id) {
            return $http.delete(constantes.URL_BASE + '/redes/' + _id)
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }
    }

})();