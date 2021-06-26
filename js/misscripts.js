  // Valida el rut con su cadena completa "XXXXXXXX-X"
  function validaRun(rutCompleto) {
    rutCompleto = rutCompleto.replace("‐","-");
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
      return false;
    var tmp 	= rutCompleto.split('-');
    var digv	= tmp[1]; 
    var rut 	= tmp[0];
    if ( digv == 'K' ) digv = 'k' ;
    
    return (dv(rut) == digv );
  }

  function dv(T){
    var M=0,S=1;
    for(;T;T=Math.floor(T/10))
      S=(S+T%10*(9-M++%6))%11;
    return S?S-1:'k';
  }


$().ready(function() {
  /* Activar carrusel */
  $('.carousel').carousel({
    interval: 4000
  });
  
  /* validar formulario */
  $("#contactoForm").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      run: {
        required: true,
        minlength: 10,
        maxlength: 10,
      },
      nombre: {
        required: true
      }, 
      fecnac: {
        required: true
      } 
    },
    messages: {
      email: {
        required: 'El email es requerido',
        email: 'El email no es válido'
      },
      run: {
        required: 'El run es requerido',
        minlength: 'Debe tener 9 caracteres',
        maxlength: 'Debe tener 9 caracteres'
      },
      nombre: 'El nombre es requerido',
      fecnac: 'La fecha es requerida'
    }
  });

  /* validar run */
  $("#run").blur(function(){
    if ( !validaRun( $("#run").val() )){
      alert("El Run no es válido");
    }
  });

  /* mostrar imagen de galeria en modal */
  $('.imagen-galeria').click( function() {
    var imagen = $(this).attr('src');

    $('.imagen-recibida').attr('src',imagen);
    $('#modalImagen').modal();
  });

  /* mostrar card en modal */
  $('.link-title').click( function() {
    var titleId =  '#' + $(this).attr('id');
    var html = $(titleId).closest('.col-lg-4').html();
    $("#cardModalContent").html(html);
    $('#cardModal').modal();
  });
});



