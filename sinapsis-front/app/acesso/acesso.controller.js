(function () {
    "use strict";

    // CONTROLLER
    angular.module('sinapsisApp')
        .controller('AcessoController', acessoController);

    acessoController.$inject = ['helperFactory', 'IndexService'];

    function acessoController(helper, service) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.go = helper.go;
        vm.logar = logar;
        vm.cadastrar = cadastrar;

        function logar() {
            return service.logar(vm.login)
                .then(function (_resp) {
                    if (_resp.error) {
                        helper.addMsg(_resp.msg, 'danger');
                    } else {
                        helper.setRootScope('userLogged', _resp.userLogged);
                        helper.path('/home');
                        helper.addMsg(_resp.message, 'success');
                    }
                });
        }

        /* ***************    FUNÇÕES INSTERNAS    ******************************** */

        function cadastrar() {
            var newUser = {
                name: vm.user.nome,
                email: vm.user.email,
                username: vm.user.username,
                password: vm.user.password,
            };
            return service.cadastrar(newUser)
                .then(tratarRes);

            function tratarRes(_resp) {
                if (_resp.error) {
                    helper.addMsg(_resp.msg, 'danger', 'Tente novamente');
                } else {
                    helper.addMsg(_resp.message, 'success');
                    helper.path('/home');
                    helper.setRootScope('userLogged', _resp.userLogged);
                }
            }
        }
    }

})();