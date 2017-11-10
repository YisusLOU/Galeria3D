(function(d,c){
    //manejando selectores con js
    /*
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
    d.querySelectorAll('#metodos-dom code'),
    )
    */
    
    //declaracion de variables
    const parrafoQueEsDOM=d.getElementById('que-es')
        hojaCSS = d.createElement('link')
        imagenes = d.getElementById('imagenes')
        figureFood = d.createElement('figure')
        linkDoc = d.getElementById('link-doc')
    //ejecutar instrucciones 
    parrafoQueEsDOM.innerHTML='El <b>modelo de objetod del documento</b>(<i>DOM - Documento objets model </i>) es un API para documentos HTML y XML. Éste Proveé una representación estructural del documento, permitiendo modificar su contenido y representación visual mediante código JS.'
    
    hojaCSS.rel = 'stylesheet'
    hojaCSS.href = './css/2_dom.css'
    d.head.appendChild(hojaCSS)
    
    //manejo de objetos del DOM
    
    c(
    d,//objeto document de JS 
    d.documentElement,//elemento html
    d.head,
    d.body,
    d.head.querySelector('title'),
    d.documentElement.lang,//accediendo al valor del atributo lang del elemento HTML
    
    imagenes,
    imagenes.parentElement,// padre del elemento
    imagenes.children,//hijosdel elemnto
    imagenes.firstElementChild,//primer hijo del elemento
    imagenes.lastElementChild,//ultimo hijo del elemento
    imagenes.previousElementSibling,//elemento hermano previo
    imagenes.nextElementSibling,//elemento hermano siguiente
    imagenes.removeChild(imagenes.firstElementChild),//eliminando primer hijo del elemento 
        
    figureFood.classList.add('figure'),
    figureFood.innerHTML = `
    <img src="http://lorempixel.com/400/400/food" alt="food"> 
    <figcaption>food</figcaption></figure>`,
    imagenes.insertBefore(figureFood,
    imagenes.lastElementChild),
        
    )
    //estableciendo y obteniendo valores de los atributos de la etiqueta HTML
    c(
    linkDoc.href,
    linkDoc.getAttribute('href'),
        d.documentElement.lang,
        d.documentElement.getAttribute('lang'),
    )
    
    //metodo establece o setters '
    
    d.documentElement.lang = 'es-CL',
    d.documentElement.setAttribute('lang', 'es-MX'),
        linkDoc.href = 'https://developer.mozilla.org/es/docs/DOM'
        linkDoc.setAttribute('target','blank'),
        linkDoc.style.padding('1rem'),
        linkDoc.style.display('block'),
        linkDoc.style.width('50px'),
        linkDoc.style.textAlign('center'),
        linkDoc.style.marginLeft('auto'),
        linkDoc.style.marginRight('auto'),
        linkDoc.style.borderRadius('25rem'),
        
        
    c(
    d.getElementById('header').className,//devuelve el vaor del atributo class en un string
    
    d.getElementById('header').classList,//devuelve el vaor del atributo class en un arreglo
    )
    
    
})(document,console.log);