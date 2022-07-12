const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = evento.target.elements["nome"].value;
    const quantidade = evento.target.elements["quantidade"].value;
    criaElemento(nome, quantidade);
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
    console.log(lista);
};
