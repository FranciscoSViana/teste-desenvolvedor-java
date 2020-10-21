(function () {
    "use strict";

    // CONTROLLER
    angular.module('sinapsisApp')
        .controller('HeaderController', headerController);

    headerController.$inject = ['IndexService', 'helperFactory'];

    function headerController(service, helper) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.go = helper.go;
        vm.logout = logout;
        vm.iniciar = iniciar;
        vm.serviceF = serviceF;


        function iniciar(_path) {
            vm.go();
        }

        function serviceF(_path) {
            return service.exemplo()
                .then(function (response) {
                    console.log('veio da service', response);
                });
        }

        function logout() {
            helper.setRootScope('userLogged', undefined);
            helper.path('/login');
        }

        /* ***************    FUNÇÕES INSTERNAS    ******************************** */
    }

})();