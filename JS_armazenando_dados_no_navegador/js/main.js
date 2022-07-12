const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach( (elemento) => {
    criaElemento(elemento['nome'], elemento['quantidade']);
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const nome = evento.target.elements["nome"];
    const quantidade = evento.target.elements["quantidade"];
    
    criaElemento(nome.value, quantidade.value);
    
    nome.value = "";
    quantidade.value = "";
});

function criaElemento(nome, quantidade) {
    // <li class="item"><strong>3</strong>Camisa</li>
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const qtdItem = document.createElement("strong");
    qtdItem.innerHTML = quantidade;

    novoItem.appendChild(qtdItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);

    armazenaNoLocalStorage(nome, quantidade);
};

function armazenaNoLocalStorage(nome, quantidade) {
    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    };

    itens.push(itemAtual);
    localStorage.setItem("itens", JSON.stringify(itens));
};
