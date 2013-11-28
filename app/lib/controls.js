$(document).ready(function(){
    $(window).on('resize', function(){
        console.log("Resizing");
        var win = $(this); //this = window

        var width = win.width() - 400;
        var canvas = $('#canvas');

        canvas.width = width;
    })
});