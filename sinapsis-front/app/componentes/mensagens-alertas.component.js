(function () {
    "use strict";

    angular.module('sinapsisApp')
        .component('mensagensAlertas', {
            templateUrl: 'componentes/mensagens-alertas.tpl.html',
            controller: 'MensagensAlertasController',
            controllerAs: 'vm',
            bindings: {
                crtl: '=',
                params: '<',
                name: '='
            },
        });

})();