'use strict';
/* Controllers */
angular.module('myApp.controllers', []).
    controller('MyCtrl1', ['$scope', '$log', function ($scope, $log) {

        $scope.canvas = {};
        $scope.params = {
            xmin : -4.90,
            xmax : 1.63,
            ymin : -1.5,
            ymax : 1.5,
            iterations : 1000
        };

        var toolbarHeight = 71;

        init();
        drawMandel();

        function init() {
            $log.log("Initing");
            $scope.canvas.width = $(window).width() - 400;
            $scope.canvas.height = $(window).height() - toolbarHeight * 3;
            $log.log($scope.canvas);
        }

        function drawMandel() {
            initMandel('canvas', 900, 400);
            computeMandel();
           /* Mandelbrot('canvas', $scope.canvas.width, $scope.canvas.height, $scope.params.xmin,
                $scope.params.xmax, $scope.params.ymin, $scope.params.ymax, $scope.params.iterations
            )*/
        }








    }])


    .controller('MyCtrl2', ['$scope', function ($scope) {

        function init() {
            NProgress.start();
        }

        init();

        $scope.reset = function() {

            NProgress.start();
            var canvas = document.getElementById('canvas');
            canvas.width = canvas.width;
            NProgress.inc();
            initMandel('canvas', canvas.width, canvas.height);
            NProgress.inc();
            computeJulia();
            NProgress.done();
        }

        $scope.about = function() {
            $('#about-panel').modal('view', {

                animation : 'top',
                position : 'center'
            });
        }

        function reDraw() {
           // NProgress.start();
            initMandel('canvas', 960, 440);
            computeMandel();

            //NProgress.done();
        }
    }]);