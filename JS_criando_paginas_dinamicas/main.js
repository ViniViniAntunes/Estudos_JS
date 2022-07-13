function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        alert(`Elemento "${elemento}" não encontrado ou inválido!`);
    };
};

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    let tecla = listaDeTeclas[contador];
    let instrumento = tecla.classList[1];
    let idAudio = `#som_${instrumento}`; // Template string
    
    tecla.onclick = function () {
        tocaSom(idAudio);
        // tecla.classList.remove('ativa');
    };
    
    tecla.onkeydown = function (evento) {
        console.log(evento.code == "Space");
        if (evento.code == "Space" || evento.code == "Enter") {
            tecla.classList.add('ativa');
        };
    };
    
    tecla.onkeyup = function (evento) {
        if (evento.code == "Space" || evento.code == "Enter") {
            tecla.classList.remove('ativa');
        };
    };
};
