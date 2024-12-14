$(document).ready(function(){
    //asignar las funciones a los eventos de los botones
    function mostrarTexto(){
        $("#text").fadeIn();
    }

    function ocultarTexto(){
        $("#text").fadeOut();
    }

    function cambiarColor(){
        const randomColor='#' + Math.floor(Math.random()*16777215).toString(16);
        $("#text").css("color", randomColor);
    }

    //asignar las funciones a los eventos de los botones
    $("#show-text").click(mostrarTexto);
    $("#hide-text").click(ocultarTexto);
    $("#change-color").click(cambiarColor);
});