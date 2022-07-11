const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const coresRobo = document.querySelectorAll("[data-cor]");
const imagemRobo = document.querySelector("[data-imagem-robo]");

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
        "velocidade": -40
    },
    "nucleos":{
        "forca": 0,
        "poder": 20,
        "energia": 58,
        "velocidade": 5
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
        "energia": 5,
        "velocidade": 42
    }
};

coresRobo.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        const corAtual = imagemRobo.src.split("2000_")[1].split(".")[0];
        let novaCor = evento.target.value;
        trocaCor(corAtual, novaCor);
    });
});

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        let operacao = evento.target.dataset.controle;
        let controle = evento.target.parentNode;
        let peca = evento.target.dataset.peca;
        manipulaDados(operacao, controle);
        atualizaEstatisticas(peca, operacao);
    });
});

function manipulaDados(operacao, controle) {
    let peca = controle.querySelector("[data-contador]");

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else if(operacao === "+") {
        peca.value = parseInt(peca.value) + 1;
    };
};

function atualizaEstatisticas(peca, operacao) {   
    estatisticas.forEach( (elemento) => {
        let item = elemento.dataset.estatistica;
        
        if(operacao === '-') {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][item];
        } else if(operacao === '+') {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][item];
        };
    });
};

function trocaCor(corAtual, novaCor) {
    let pathImagem = document.querySelector("[data-imagem-robo]").src.replace(corAtual, novaCor).split("DOM/")[1];
    imagemRobo.setAttribute("src", pathImagem);
};
