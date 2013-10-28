'use strict';
/* Controllers */
angular.module('myApp.controllers', []).

    controller('MyCtrl1', ['$scope', function ($scope) {

        function init() {

            /*        var palette = [
             'rgb(0,0,0)',
             'rgb(255,0,0)',
             'rgb(0,255,0)',
             'rgb(0,0,255)',
             'rgb(255,255,255)'
             ];

             var R = 1000;

             var color = palette[1];

             var canvas = document.getElementById("a");

             var context = canvas.getContext("2d");

             var math = mathjs();

             context.strokeRect(1, 1, 500, 300);
             context.strokeRect(125,40, 500, 300);
             console.log("Start calculation");
             for ( var x=0; x<canvas.width; x++ ){
             for( var y=0; y<canvas.height; y++ ) {
             var xtemp = 0.0;

             var zx = 0.0;
             var zy = 0.0;
             var i = 0;

             while ((zx*zx) + (zy*zy) < R && i<palette.length) {
             var xtemp = zx*zx + zy*zy + y/2.5;
             zy = 2*zx*zy + y/2.5 ;
             zx = xtemp;

             i++;
             }
             color = palette[i-1];

             context.fillStyle = color;

             context.fillRect(x,y,1,1);
             }
             }
             console.log("calculation done");*/


        }

        function drawMandel() {
            NProgress.start();
            initMandel("canvas", 960, 440);


            computeMandel();
            NProgress.done();
        }

        init();
        drawMandel();







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
            computeMandel();
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