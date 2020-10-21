(function () {
    "use strict";

    angular.module('sinapsisApp')
        .controller('SubestacaoController', subestacaoController);

    subestacaoController.$inject = ['helperFactory', 'subestacaoService', '$routeParams'];

    function subestacaoController(helper, service, $routeParams) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */


        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.go = helper.go;
        vm.iniciar = iniciar;
        vm.irEditar = irEditar;
        vm.deletar = deletar;
        vm.submit = submit;

        function iniciar() {
            if ($routeParams.id) {
                return consultar($routeParams.id)
                    .then(function (_sub) {
                        vm.subestacao = _sub;
                    });
            } else {
                return listarSubestacoes();
            }
        }

        function submit() {
            if (vm.subestacao.id) {
                return editar();
            } else {
                return cadastrar();
            }
        }

        function consultar(_id) {
            return service.consultar(_id)
                .then(tratarRetorno);

            function tratarRetorno(_resp) {
                if (_resp.id) {
                    return _resp;
                } else {
                    helper.addMsg(_resp.msg, 'danger', 'Tente novamente');
                }
            }
        }

        function irEditar(_sub) {
            helper.go('/gerenciar/subsestacoes/editar/' + _sub.id);
        }

        function deletar(_id) {
            return service.deletar(_id)
                .then(tratarRetorno);

            function tratarRetorno(_resp) {
                if (_resp.error) {
                    helper.addMsg(_resp.msg, 'danger', 'Tente novamente');
                } else {
                    helper.addMsg(_resp.message, 'success');
                    listarSubestacoes();
                }
            }
        }
        /* ***************    FUNÇÕES INSTERNAS    ******************************** */
        function listarSubestacoes() {
            return service.listar()
                .then(salvarSubestacoes);

            function salvarSubestacoes(_listaSubestacoes) {
                vm.listaSubestacoes = _listaSubestacoes;
            }
        }

        function cadastrar() {
            return service.cadastrar(vm.subestacao)
                .then(function (_subestacao) {
                    tratarResposta('Cadastrada', _subestacao);
                });
        }

        function editar() {
            return service.editar(vm.subestacao)
                .then(function (_subestacao) {
                    tratarResposta('Alterada', _subestacao);
                });
        }

        function tratarResposta(_acao, _subestacao) {
            if (_subestacao.id) {
                helper.addMsg('Subestacao' + _acao + ' com sucesso!', 'success');
                helper.path('/gerenciar/subestacoes');
            } else {
                helper.addMsg(null, 'danger', 'Tente novamente');
            }
        }
    }

})();