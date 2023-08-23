//CURSOR EFEITO
let cursor = document.querySelector('#cursor');
let body = document.querySelector('body');
document.onmousemove = function(e){
  //move cursor
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';

  //animate background
  body.style.backgroundPositionX = e.pageX/-4 + 'px';
  body.style.backgroundPositionY = e.pageY/-4 + 'px';

  let element = document.createElement('div');
  element.className = 'element';
  body.prepend(element);

  element.style.left = cursor.getBoundingClientRect().x + 'px';
  element.style.top = cursor.getBoundingClientRect().y - 10 + 'px';

  setTimeout(function(){
    let text = document.querySelectorAll('.element')[0],
    directionX = Math.random() < .5 ? -1 : 1,
    directionY = Math.random() < .5 ? -1 : 1

    text.style.left = parseInt(text.style.left) - (directionX * (Math.random() * 200)) + 'px';
    text.style.top = parseInt(text.style.top) - (directionY * (Math.random() * 200)) + 'px';
    text.style.opacity = 0;
    text.style.transform = 'scale(0.25)'; 
    text.innerHTML = randomText();

    setTimeout(function(){
      element.remove()
    },1000)
  }, 10)

  function randomText(){
    var text = ("pedrojonnathanmatosdesousa").split("");
    letter = text[Math.floor(Math.random() * text.length)];
    return letter;
  }

}


//TRANSIÇÃO DO LETRAMENTO DIGITAÇÃO
document.addEventListener("DOMContentLoaded", function() {
    function ativaLetra(elemento) {
      const arrTexto = elemento.innerHTML.split('');
      elemento.innerHTML = '';
      arrTexto.forEach((letra, i) => {
        setTimeout(() => {
          elemento.innerHTML += letra;
        }, 120 * i);
      });
    }
  
    function escrevendoLetra() {
      const titulo = document.querySelector('.digitando');
      ativaLetra(titulo);
    }
  
    escrevendoLetra();
  });


function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


//SCROLL REVEAL ANIMAÇÃO DA TELA DE PROJETOS
window.sr = ScrollReveal({ reset: true});
sr.reveal('.projeto-one', {duration: 3000});
sr.reveal('.projeto-two', {duration: 3000});
//ANIMAÇÃO DA SEÇÃO DE FORMAÇÃO
window.sro = ScrollReveal({ reset: true});
sro.reveal('.seçao-formations', {
  rotate: { x: 0, y: 88, z: 0},
  duration: 4000
});


