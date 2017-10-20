/*cometario 
de 
varias
lineas */

// comentario de uuna linea 

//parentesis en js significa que se va a ejecutar una funsión de codigo nativo


//definición o declaracio 


//function saludo(nombre){
    
    //interpolación de variables '=cuando se usa texto simple `=cuando se introduce un valor  

//    alert(`Hola, ${nombre}`)}

//invocaión

// saludo('Tete')
;

//Es bueno encapsular el codigo en una función anonima ejecutable

//Definición o declaración
function saludo (nombre = 'ICONOS') {
  //Interpolación de variables
  //alert(`Hola, ${nombre}`)
}

//Invocación o ejecución
//saludo('Tete')
//saludo()
;
//Es buena práctica encapsular tu código en una función anónima autoejecutable
(function (d, w) {
  //alert(d)
  //alert(w)
  //alert('Hola')
  //console.log(d, w, 'Hola')
})(document, window);

/* Objetos Literales */
(function (c) {
  c('*****Objetos Literales*****')

  /* Para declarar una variable en JS se utilizaba la palabra 'var'. Ahora para declarar una variable usamos 'const' o 'let' */

  /* Los objetos en JS son una colección de propiedades con sus respectivos valores. Esas propiedades pueden ser atributos o métodos */
  const perro = {
    nombre: 'Canela',
    edad: 5,
    esterilizado: true,
    raza: 'electrico',
    genero: 'female',
      
      
    ladrar: function () {
      c('Roffft Rofft!!!')
    },
    comer: function (comida = 'croquetas') {
      c(`${this.nombre} come ${comida}`)
    },
    aparecer: function (imagen) {
      document.write(`<img src="${imagen}">`)
    }
  }

  c(
    perro,
    perro.nombre,
    perro.edad,
    perro.esterilizado,
    perro.raza,
    perro.genero
  )

  perro.ladrar()
  perro.comer()
  perro.comer('tacos')
  perro.aparecer('https://www.recreoviral.com/wp-content/uploads/2015/08/Porque-son-importantes-los-Pitbulls-7.jpg')

  const perro2 = {
    nombre: 'Boni',
    edad: 10,
    esterilizado: false,
    raza: 'Boxer',
    genero: 'Hembra',
    ladrar: function () {
      c('Guauuu guauuu!!!')
    },
    comer: function (comida = 'croquetas') {
      c(`${this.nombre} come ${comida}`)
    },
    aparecer: function (imagen) {
      document.write(`<img src="${imagen}">`)
    }
  }

  c(
    perro2,
    perro2.nombre,
    perro2.edad,
    perro2.esterilizado,
    perro2.raza,
    perro2.genero
  )

  perro2.ladrar()
  perro2.comer()
  perro2.comer('mis sobras')
  perro2.aparecer('')
})(console.log);

/* Clases */
(function (c) {
  /* Una clase es un modelo a seguir, un machote */
  class Perro {
    //El constructor es un método especial que se ejecuta en el momento de instanciar la clase
    constructor (nombre, edad, esterilizado, raza, genero) {
      //Definición de los Atributos de mi clase
      this.nombre = nombre
      this.edad = edad
      this.esterilizado = esterilizado
      this.raza = raza
      this.genero = genero
    }

    //Definición de los métodos de mi clase
    ladrar () {
      c('Guauuu guauuu!!!')
    }

    comer (comida = 'croquetas') {
      c(`${this.nombre} come ${comida}`)
    }

    aparecer (imagen) {
      document.write(`<img src="${imagen}">`)
    }
  }

  //La palabra new me permite crear o INSTANCIAR un objeto de un tipo determinado de clase
  const firulais = new Perro('Firulais', 3, false, 'Callejero', 'Macho')
  const frida = new Perro('Frida', 7, true, 'Labrador', 'Hembra')

  c(
    firulais,
    firulais.nombre,
    firulais.edad,
    firulais.raza,
    firulais.genero,
    firulais.esterilizado,
    frida,
    frida.nombre,
    frida.edad,
    frida.raza,
    frida.genero,
    frida.esterilizado,
  )

  firulais.ladrar()
  firulais.comer()
  firulais.aparecer('http://i0.wp.com/cinicosdesinope.com/wp-content/uploads/2015/09/firulais-perro-mascota-rugrats-personajes.png')

  frida.ladrar()
  frida.comer()
  frida.aparecer('https://cdn.heraldodemexico.com.mx/wp-content/uploads/2017/09/heraldo-de-mexico-frida-juchitan-1024x682.jpg')
})(console.log);



