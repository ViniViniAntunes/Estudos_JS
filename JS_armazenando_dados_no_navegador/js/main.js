const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach( (elemento) => {
    criaElemento(elemento);
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const nome = evento.target.elements["nome"];
    const quantidade = evento.target.elements["quantidade"];
    
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    };
    
    criaElemento(itemAtual);
    armazenaNoLocalStorage(itemAtual);
    
    nome.value = "";
    quantidade.value = "";
});

function criaElemento(item) {

    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const qtdItem = document.createElement("strong");
    qtdItem.innerHTML = item.quantidade;

    novoItem.appendChild(qtdItem);
    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);

};

function armazenaNoLocalStorage(item) {
    itens.push(item);
    localStorage.setItem("itens", JSON.stringify(itens));
};
