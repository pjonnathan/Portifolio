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


