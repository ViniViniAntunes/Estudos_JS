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
    const elementoExiste = itens.find( elemento => elemento.nome === nome.value );
    
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    };
    
    if (elementoExiste) {
        itemAtual.id = elementoExiste.id;
        atualizaElemento(itemAtual);
        itens[itens.findIndex(elemento => elemento.id === elementoExiste.id)] = itemAtual;
    } else {
        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0;
        criaElemento(itemAtual);
        itens.push(itemAtual);
    };

    atualizaLocalStorage();
    
    nome.value = "";
    quantidade.value = "";
});

function criaElemento(item) {

    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const qtdItem = document.createElement("strong");
    qtdItem.innerHTML = item.quantidade;
    qtdItem.dataset.id = item.id;

    novoItem.appendChild(qtdItem);
    novoItem.innerHTML += item.nome;

    novoItem.appendChild(botaoDeleta(item.id));

    lista.appendChild(novoItem);
};

function atualizaLocalStorage() {
    localStorage.setItem("itens", JSON.stringify(itens));
};

function atualizaElemento(item) {
    document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantidade; 
};

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button");
    elementoBotao.innerHTML = "X";
    elementoBotao.addEventListener("click", function() {
        deletaElemento(this.parentNode, id);
    });
    return elementoBotao;
};

function deletaElemento(tag, id) {
    tag.remove();
    idItemPraDeletar = itens.findIndex(elemento => elemento.id === id);
    itens.splice(idItemPraDeletar, 1);
    atualizaLocalStorage();
};

