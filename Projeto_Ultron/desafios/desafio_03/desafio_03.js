const botao = document.querySelector("[botao]");
const listaDeCores = document.querySelector("[lista-de-cores]");

botao.addEventListener("click", (evento) => {
    if (evento.target.textContent === "Limpar lista de tintas em estoque") {
        limparTintas();
    } else if (evento.target.textContent === "Mostrar lista de tintas em estoque") {
        mostraTintas();
    };
    //mostraTintas
});

function limparTintas() {
    const div = document.querySelector("div");
    div.removeChild(listaDeCores);
    botao.textContent = "Mostrar lista de tintas em estoque";
};

function mostraTintas() {
    const div = document.querySelector("div");
    div.appendChild(listaDeCores);
    botao.textContent = "Limpar lista de tintas em estoque";
};