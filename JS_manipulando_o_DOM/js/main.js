const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

robotron.addEventListener("click", () => {
    console.log("Click no robô");
});

function dizOi(nome) {
    console.log("Oi " + nome);
    console.log("Bem vindo ao Robotron 2000");
};

dizOi('Nina');

somar.addEventListener("click", soma());

function soma() {
    const valor = parseInt(document.querySelector("#braco").getElementsByClassName("controle-contador").value[0]);
    valor.value += 1;
    console.log(valor.value); 
};