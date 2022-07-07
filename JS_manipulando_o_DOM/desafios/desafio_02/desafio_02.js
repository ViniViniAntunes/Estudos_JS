const botao = document.querySelector("#calcular");

botao.addEventListener("click", () => {
    elemento = document.getElementsByClassName("resultado");
    elemento[0].innerText = "Fui clicado";
    elemento[1].innerText = "Real oficial";
});