;
(function (d, w, n, c, $) {
  //Programación que se activa cuando el documento HTML ha cargado en el navegador
  $(d).ready(function () {
    //método que activa el la barra de navegación
    //http://materializecss.com/side-nav.html
    $(".button-collapse").sideNav({
      /* edge: 'right' */
      menuWidth: '80%'
    })
  })
})(document, window, navigator, console.log, jQuery);
