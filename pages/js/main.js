window.addEventListener('scroll', function() {
    var elemento = document.getElementById('sectionProjetos');
    var barraMenu = document.getElementById('barraMenu');
    var divBotoesMenu = document.getElementById('botoesMenu');
    var posicaoTopo = elemento.getBoundingClientRect().top;
    var alturaJanela = window.innerHeight;

    if (posicaoTopo < (alturaJanela * 25) /100) { // 20% do topo da janela
        barraMenu.classList.add('animacao-barramenu');
        divBotoesMenu.removeAttribute("style");
    } else {
        barraMenu.classList.remove('animacao-barramenu');
        divBotoesMenu.style.display = "none";
    }
});