(function(d,c){
    
    const panel = d.querySelector('.Panel'),
          panelBtn = d.querySelector('.Panel-button'),
          hamburger = d.querySelector('.hamburger')
          
          panelBtn.addEventListener('click',function(e){
          hamburger.classList.toggle('is-active')
          panel.classList.toggle('is-active')
          })
          
})(document,console.log);