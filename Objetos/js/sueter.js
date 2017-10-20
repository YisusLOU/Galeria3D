;function(c){
    c('##### Sueter #####')
    
    const sueter = {
        nombre: 'sueter de lana',
        tipo: 'lana suave',
        mangas:'largas',
        decorado:'copos',
        
        calentar: function () {
            c('mi cuerpecito')
        },
        lavar: function (lavadora = 'agua fria') {
            c(`${this.nombre} lava ${seco}`)
        },
        colgar: function () {
            c('ropero')
            document.write(`<img src="${imagen}">`)
        }
    }
    
    c(
    sueter,
    sueter.nombre,
    sueter.tipo,
    sueter.mangas,
    sueter.decorado
    )
    
    sueter.calentar()
    sueter.lavar()
    sueter.lavar('a mano')
    sueter.colgar('')
    
}(console.log);