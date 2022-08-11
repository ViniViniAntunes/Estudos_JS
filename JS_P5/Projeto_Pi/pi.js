var pi;
var diametro = 810;
var raio = diametro / 2;
var qtdTotal = 0;
var qtdDentro = 0;
var piGravado = 0;

function setup() {
  createCanvas(diametro, diametro);
  background(51, 51, 51);
}

function draw() {
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(raio, raio, diametro, diametro);
  rectMode(CENTER);
  rect(raio, raio, diametro, diametro);
  
  translate(raio, raio);

  for (var i = 0; i < 10000; i++) {
    var x = random(-raio, raio);
    var y = random(-raio, raio);
    
    var distancia = x * x + y * y;

    if (distancia < raio * raio) {
      stroke(0, 200, 0, 100);
      qtdDentro++;

    } else {
      stroke(200, 0, 0, 100);
    };
    strokeWeight(1);
    qtdTotal ++;
    point(x, y);
    
    var piCalculado = 4 * (qtdDentro / qtdTotal);
    var diffGravada = Math.abs(Math.PI - piGravado);
    var diffCalculada = Math.abs(Math.PI - piCalculado);
    
    if (diffCalculada < diffGravada) {
      diffGravada = diffCalculada;
      piGravado = piCalculado;
      console.log(piGravado, piGravado);
    };
  };


};
