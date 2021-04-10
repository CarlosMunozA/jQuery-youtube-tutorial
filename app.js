$(document).ready(function() {
//https://bluuweb.cl/jquery


    /*console.log('Funcionando');

});
*/
/*$(document).ready(function () {

    //etiquetas
    $('h1').html('Etiqueta H1');
    //desde class anteponiendo el .
    $('.display-4').html('Desde Clase');
    //id (#)
    $('#idh1').html('Desde id')

    //javascript puro para hacer lo mismo de arriba
    document.querySelector('h1').innerHTML = 'Etiqueta h1';
    document.querySelector('.display-4').innerHTML = 'desde clase';
    document.querySelector('#idh1').innerHTML = 'desde id';

});
*/
    //$('.container h1').html('JHosdf');
    //solo el primero
    //$('.container h1:first').html('JHosdf');
    //solo el último
    //$('.container h1:first').html('JHosdf');

//$('#h1').addClass('display-4')
//$('#idh1').addClass('text-danger');
//$('#idh1').removeClass('display-4');
// agregar un elemento al final
//$('#contenido').append('<h1>Este es un elemento al final</h1>');
//agregar un elemento al principio
//$('#contenido').prepend('<h1>Este es un elemento al princiio</h1>');

//agregar una caracteristica al css
//$('#color-azul').css('color', 'blue');
//agregar varias caracteristicas al css
//$('#color-azul').css({'color': 'blue', background : 'salmon',margin:23});

//elimina el html completo, por si es información delicada
//$('#color-azul').remove();
//solo la oculta, pero sigue apareciendo al inspeccionar la página
//$('#color-azul').hide();


//$('img').attr('src', 'https://avatars.githubusercontent.com/u/79390385?s=120&v=4');
//$('img:last').attr('width', 50);

// var parrafo = $('#resultado p');

// $('.btn-primary').click(function(){ 
//     parrafo.addClass('display-4');
    
// })
// $('.btn-danger').click(function(){ 
//     parrafo.removeClass('display-4');
    
// })
// $('.btn-warning').click(function(){ 
//     parrafo.toggleClass('display-4');
    
// })

// $('#formulario').submit(function(evento){

//     evento.preventDefault();
//     var nombre = $('#nombre').val();
//     var contenido = $('#contenido');
//     //console.log(nombre);

// })


//$(document).ready(function() {
  //Declarar variables reutilizables
//   var input = $("#nombre");
//   var contenido = $("#contenido");

//   //Evento keyup
//   input.keyup(function() {
//     console.log(input.val()); //verificamos en consola
//     contenido.html(input.val()); //agregamos en contenido

//     //Podemos verificar si está vacio el input
//     if (input.val() === "") {
//       contenido.html("Estoy esperando...");
//     }

// var resultado = $('#resultado')
// $('.btn-primary').click(function(){ 
//     resultado.show(1000)
//     //resultado.fadeIn(1000)
    
// })
// $('.btn-danger').click(function(){ 
//     resultado.fadeOut(1000)
//     resultado.hide(1000)
// })
// $('.btn-warning').click(function(){ 
//     resultado.fadeToggle(1000)
//     resultado.toggle(1000)
// })

var resultado = $('#resultado')
$('.btn-primary').click(function(){ 
    resultado.animate({left:'100px',opacity:'0,5',height:'+=150px',width:'+=150px'
},3000,function(){
    resultado.animate({
        left:'-0px',
        opacity:'1',
        height:'-=150px',
        width:'-=150px'
    },1000)
});



})
})