// Um JavaScript que percorra a lista de teclas do AluraFone,
// e ao clicar na tecla Enter ou na tecla Espaço, adicione a classe
// ativa no elemento e também resolva o momento de retirar a classe ativa do elemento.

const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (let i = 0; i < listaDeTeclas.length; i++) {
    
    let tecla = listaDeTeclas[i];

    tecla.onclick = function () {
        inputTel.value = inputTel.value + tecla.value;
        tecla.classList.add('ativa');
        tecla.classList.remove('ativa');
    };
    
    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        };
    };
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    };
};