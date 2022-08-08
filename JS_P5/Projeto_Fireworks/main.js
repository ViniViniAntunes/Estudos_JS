var fireworks = [];
var gravidade;
var sliderQuantidade;
var sliderCor;

function setup() {
    createCanvas(600, 600);
    gravidade = createVector(0, 0.02);
    // stroke(255);
    strokeWeight(4);
    background(42);
    sliderQuantidade = createSlider(0.1, 1, 0.1, 0.1);
    sliderCor = createSlider(0, 360, 60, 40);
}

function draw() {
    background(42, 25);
    cor = sliderCor.value();
    stroke(cor, 150, 150);
    quantidade = sliderQuantidade.value();
    if (random(1) < quantidade) {
        fireworks.push(new Firework(cor));
    };
    for (var i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();
        if (fireworks[i].done()) {
            fireworks.splice(i, 1);
        };
    };
};
