(function () {
    "use strict";

    angular.module('sinapsisApp')
        .factory('IndexFactory', indexFactory);

    indexFactory.$inject = [];

    function indexFactory() {
        return {
            name: name
        }

        function name(params) {

        }
    }
})();