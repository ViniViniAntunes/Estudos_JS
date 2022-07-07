const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        let operacao = evento.target.textContent;
        let controle = evento.target.parentNode;
        manipulaDados(operacao, controle);
    });
});

function manipulaDados(operacao, controle) {
    let peca = controle.querySelector(".controle-contador");

    if(operacao == "-") {
        peca.value = parseInt(peca.value) - 1;
    } else if(operacao == "+") {
        peca.value = parseInt(peca.value) + 1;
    };
};

robotron.addEventListener("click", () => {
    console.log("Click no robô");
});
