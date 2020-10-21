(function () {
    "use strict";

    angular.module('sinapsisApp')
        .controller('RedesController', redesController);

    redesController.$inject = ['helperFactory', 'redesService', '$routeParams'];

    function redesController(helper, service, $routeParams) {
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
                    .then(function (_rede) {
                        vm.rede = _rede;
                    })
                    .then(listarSubestacoes);
            } else {
                return listar()
                    .then(listarSubestacoes);
            }
        }

        function submit() {
            if (vm.rede._id) {
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

        function irEditar(_rede) {
            helper.go('/gerenciar/redes/editar' + _rede._id);
        }

        function deletar(_rede) {
            return service.deletar(_id)
                .then(tratarRetorno);

            function tratarRetorno(_resp) {
                if (_resp.error) {
                    helper.addMsg(_resp.msg, 'danger', 'Tente novamente');
                } else {
                    helper.addMsg(_resp.message, 'success');
                    listar();
                }
            }
        }
        /* ***************    FUNÇÕES INSTERNAS    ******************************** */
        function listar() {
            return service.listar()
                .then(salvarRedes);

            function salvarRedes(_listaRedes) {
                vm.listaRedes = _listaRedes;
            }
        }

        function listarSubestacoes() {
            return service.listarSubestacoes()
                .then(salvarSubestacoes);

            function salvarSubestacoes(_listaSubestacoes) {
                vm.listaSubestacoes = _listaSubestacoes;
            }
        }

        function cadastrar() {
            return service.cadastrar(vm.rede)
                .then(function (_rede) {
                    tratarResposta('Cadastrado', _rede);
                });
        }

        function editar() {
            return service.editar(vm.rede)
                .then(function (_rede) {
                    tratarResposta('Alterado', _rede);
                });
        }

        function tratarResposta(_acao, _rede) {
            if (_rede.id) {
                helper.addMsg('/gerenciar/redes');
                helper.addMsg('Rede' + _acao + ' com sucesso!', 'success');
            } else {
                helper.addMsg(null, 'danger', 'Tente novamente');
            }
        }

    }

})();