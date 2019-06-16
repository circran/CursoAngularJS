(function() {

    var app = angular.module('universidadApp', []);

    app.controller('listadoCtrl', ['$scope', function($scope) {

        $scope.listado = ["Fernando Herrera", "Melissa Flores", "Juan Carlos Pinneda", "Alan Carando"];

        $scope.listadoProfesores = {
            profesores: [{
                    nombre: "Fernando Herrera",
                    edad: 29,
                    clase: "PEE"
                },
                {
                    nombre: "Melisa Flores",
                    edad: 24,
                    clase: "ICE"
                },
                {
                    nombre: "Juan Carlos",
                    edad: 48,
                    clase: "M110"
                }
            ]
        };

    }]);





})();