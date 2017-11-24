(function (d, c) {
  /* ********** IMPORTACIÓN DE MÓDULOS ********** */

  /* ********** DECLARACIÓN DE VARIABLES ********** */
   const parrafoQueEsDOM = d.getElementById('que-es'),
    hojaCSS = d.createElement('link'),
    imagenes = d.getElementById('imagenes'),
    figureFood = d.createElement('figure'),
    linkDoc = d.getElementById('link-doc'),
    header = d.getElementById('header'),
    articleTeoria = d.getElementById('teoria'),
    figuras = d.querySelectorAll('.figure'),
    pEvento = d.getElementById('evento'),
    btnSaludar = d.getElementById('btn-saludar'),
    btnCabeceraFija = d.getElementById('btn-cabecera-fija'),
    btnCabeceraAmarilla = d.getElementById('btn-cabecera-amarilla'),
    btnCabeceraVerde = d.getElementById('btn-cabecera-verde'),
    btnToggleFigure = d.getElementById('btn-toggle-figure')

  /* ********** DECLARACIÓN DE FUNCIONES ********** */
  function saludar () {
    alert('Hola mundo')
  }


  /* ********** EJECUCIÓN DE CÓDIGO ********** */
  //Manejo de selectores CSS con JS
  c(
    d.querySelector('li'),
    d.querySelector('#header'),
    d.querySelector('.figure'),
    d.querySelector('#metodos-dom code'),
    d.querySelectorAll('li'),
    d.querySelectorAll('li').length,
    d.querySelectorAll('li')[4],
    d.querySelectorAll('.figure'),
    d.querySelectorAll('#header'),
    d.getElementById('header'),
    d.querySelectorAll('#metodos-dom code')
  )

  parrafoQueEsDOM.innerText = 'El <b>Modelo de Objetos del Documento</b> (<i>DOM - Document Object Model</i>) es un API para documentos HTML y XML. Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.'

  parrafoQueEsDOM.innerHTML = 'El <b>Modelo de Objetos del Documento</b> (<i>DOM - Document Object Model</i>) es un API para documentos HTML y XML. Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.'

  hojaCSS.rel = 'stylesheet'
  hojaCSS.href = './css/2_dom.css'
  d.head.appendChild(hojaCSS)

  //Manejo de objetos del DOM
  c(
   d, // objeto document de JS
   d.documentElement, // Elemento <html>
   d.head, // Elemento <head>
   d.body, // elemento <body>
   d.head.querySelector('title'), // título del documento
   d.documentElement.lang // accediendo al valor del atributo lang del elemento <html>
  )

  //Manejo de los elementos del DOM por su posición
  c(
    imagenes,
    imagenes.parentElement, // Padre del elemento
    imagenes.children, // Hijos del elemento
    imagenes.firstElementChild, // Primer hijo del elemento
    imagenes.lastElementChild, // Último hijo del elemento
    imagenes.previousElementSibling, // Elemento hermano previo
    imagenes.nextElementSibling // Elemento hermano siguiente
  )

  //Eliminando el primer hijo del elemento
  imagenes.removeChild(imagenes.firstElementChild)

  //Manejo  de clases CSS en JS
  c(
    d.getElementById('header').className, // Devuelve el valor del atributo class en un String
    d.getElementById('header').classList // Devuelve el valor del atributo class en un Arreglo
  )

  figureFood.classList.add('figure')
  figureFood.innerHTML = `
    <img src= "http://lorempixel.com/400/400/food" alt= "Food">
    <figcaption>Food</figcaption>
  `
  //Inserta un nodo antes del que se indique como referencia
  imagenes.insertBefore(figureFood, imagenes.lastElementChild)

  //Estableciendo y Obteniendo los valores de los atributos de las etiquetas HTML
  //Métodos obtenedores (getters)
  c(
    linkDoc.href,
    linkDoc.getAttribute('href'),
    d.documentElement.lang,
    d.documentElement.getAttribute('lang'),
    linkDoc.style
  )
  //Métodos establecedores (setters)
  d.documentElement.lang = 'es-CL'
  d.documentElement.setAttribute('lang', 'es-MX')
  linkDoc.href = 'https://developer.mozilla.org/es/docs/DOM'
  linkDoc.setAttribute('target', '_blank')
  linkDoc.style.padding = '1rem'
  linkDoc.style.display = 'block'
  linkDoc.style.width = '50%'
  linkDoc.style.textAlign = 'center'
  linkDoc.style.marginLeft = 'auto'
  linkDoc.style.marginRight = 'auto'
  linkDoc.style.borderRadius = '.25rem'

  //Eventos
  pEvento.innerHTML = 'Los eventos son los mecanismos que tenemos en JavaScript para controlar las acciones del usuario y definir el comportamiento del documento en cierto momento o cuando se cumplan ciertas condiciones. Las funciones que se ejecutan en un evento se llaman <b><i>Event Handler</i></b> (Manejadores de Eventos).'

  //Asignar un manejador de Eventos
  btnSaludar.addEventListener('click', saludar)

  btnCabeceraFija.addEventListener('click', function () {
    c(
      header.className,
      header.classList,
      header.classList.contains('fixed'),
      header.classList.contains('fix')
    )

    if ( header.classList.contains('fixed') ) {
      header.classList.remove('fixed')
    } else {
      header.classList.add('fixed')
    }
  })

  btnCabeceraAmarilla.addEventListener('click', function () {
    header.classList.add('bg-yellow')
    header.classList.remove('bg-green')
  })

  btnCabeceraVerde.addEventListener('click', function () {
    header.classList.add('bg-green')
    header.classList.remove('bg-yellow')
  })

  btnToggleFigure.addEventListener('click', function () {
    c(
      figuras,
      figuras[2]
    )
    //figuras[2].classList.toggle('figure')

    figuras.forEach(function (el) {
      el.classList.toggle('figure')
    })

    figureFood.classList.toggle('figure')
  })
})(document, console.log);