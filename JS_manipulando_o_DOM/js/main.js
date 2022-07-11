const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        let operacao = evento.target.dataset.controle;
        let controle = evento.target.parentNode;
        let peca = evento.target.dataset.peca;
        manipulaDados(operacao, controle);
        atualizaEstatisticas(peca);
    });
});

robotron.addEventListener("click", () => {
    console.log("Click no robô");
});

function manipulaDados(operacao, controle) {
    let peca = controle.querySelector("[data-contador]");

    if(operacao == "-") {
        peca.value = parseInt(peca.value) - 1;
    } else if(operacao == "+") {
        peca.value = parseInt(peca.value) + 1;
    };
};

function atualizaEstatisticas(peca) {   
    estatisticas.forEach( (elemento) => {
        let item = elemento.dataset.estatistica;
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][item];
    });
};
