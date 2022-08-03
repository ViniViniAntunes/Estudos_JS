// Um script que percorra a lista de teclas, e ao clicar em qualquer tecla do teclado, imprima o valor no campo "Digite seu telefone".

const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (let i = 0; i < listaDeTeclas.length; i++) {
    
    let tecla = listaDeTeclas[i];

    tecla.onclick = function () {
        inputTel.value = inputTel.value + tecla.value;
    };
    // console.log(tecla.value);
};
