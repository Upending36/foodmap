//splash
$(document).ready(function(){
window.onload=timeout;
funcion timeout(){
  window.setTimeout("redirect()",5000)
}

function redirect(){
  window.location="Home.htm"
  resturn
}



  //comenzamos aplicandole un evento click a las etiquetas de tipo ancla
  //que se encuentran en la lista (todos,pizzas,tacos...)
  $('ul .listado li a').click(function(){
    //el texto al cual dimos click lo pasamos a minusculas,
    //le quitamos los espacios en blanco y lo asignamos a la
    //variable texto filtro
    var textoFiltro = $(this).text().toLowerCase().replace(/\s/g"-");

    //si el texto es igual a 'todos' mostramos todos los elementos
    //que contengan la clase, y a dicho elemento le removemos la clase hidden.
    //la clase hidden es opcional, en este caso la usamos solo como referencia,
    //puedes llamarla como quieras o incluso no utilizarla
    if(textoFiltro == 'todos') {
      $('div .filtros div .hidden')fadeIn('slow').removeClass('hidden');
    }
    //de lo contrario hacemos lo siguiente
    else{
      //aqui empieza la magia

      //hacemos un bucle con el metodo each para obtener todos los divs que
      //se encuentren dentro de la clase filtros
      $('.filtros div').each(funcion(){
      //entonces comparamos
      //si el elemento NO tiene una clase llamada con el mismo valor que
      //nuestra variable textoFiltro, entonces se ocultara utilizando el metodo
      //fadeOut() de jquery
      if(!$(this).hasClass(textoFiltro)){
        $(this).fadeOut('normal').addClass(hidden);
      }
      //de lo contrario se mostrara utilizando el metodo fadeIn de jquery
      else {
        $(this).fadeIn('slow').removeClass(hidden);
      }
    });
    }
    return false;
  });
});
