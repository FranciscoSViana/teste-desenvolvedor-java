(function () {
    "use strict";

    angular.module('sinapsisApp')
        .constant('constantes', {
            URL_BASE: 'http:localhost:8080',
            URL_BASE1: 'https://gitmaratonadev.stefanini.com.br/apisemanaangular/api',

            MENSAGENS: {
                ERRO_GERAL: 'Ocorreu algum problema. Tente novamente mais tarde.',
                SEM_ACESSO: 'Você não tem acesso a esta página.'
            },
            MSG_ERRO: 'Ocorreu algum problema. Tente novamente mais tarde.'
        });


})();