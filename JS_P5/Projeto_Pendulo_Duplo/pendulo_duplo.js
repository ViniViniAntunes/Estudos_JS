var comprimento1 = 200;
var comprimento2 = 200;
var massa1 = 40;
var massa2 = 40;
var angulo1 = 1.5;
var angulo2 = 0.5;
var velocidadeAngulo1 = 0;
var velocidadeAngulo2 = 0;
var gravidade = 1;
var px2 = -1;
var py2 = -1;
var x_centro = 400;
var y_centro = 200;


function setup() {
  createCanvas(800, 800);
  background(51, 51, 51);
}

function draw() {
  var numerador1 = -gravidade * (2 * massa1 + massa2) * sin(angulo1);
  var numerador2 = -massa2 * gravidade * sin(angulo1 - 2 * angulo2);
  var numerador3 = -2 * sin(angulo1 - angulo2) * massa2;
  var numerador4 = velocidadeAngulo2**2 * comprimento2 + velocidadeAngulo1**2 * comprimento1 * cos(angulo1 - angulo2);
  var denominador = comprimento1 * (2 * massa1 + massa2 - massa2 * cos(2 * angulo1 - 2 * angulo2));
  var aceleracaoAngulo1 = (numerador1 + numerador2 + numerador3 * numerador4) / denominador;
  
  numerador1 = 2 * sin(angulo1 - angulo2);
  numerador2 = (velocidadeAngulo1**2 * comprimento1 * (massa1 + massa2));
  numerador3 = gravidade * (massa1 + massa2) * cos(angulo1);
  numerador4 = velocidadeAngulo2**2 * comprimento2 * massa2 * cos(angulo1 - angulo2);
  denominador = comprimento2 * (2 * massa1 + massa2 - massa2 * cos(2 * angulo1 - 2 * angulo2));
  var aceleracaoAngulo2 = (numerador1 * (numerador2 + numerador3 + numerador4)) / denominador;

  background(51, 51, 51);
  stroke(0);
  strokeWeight(2);

  translate(x_centro, y_centro)

  var x1 = comprimento1 * sin(angulo1);
  var y1 = comprimento1 * cos(angulo1);
  
  var x2 = x1 + comprimento2 * sin(angulo2);
  var y2 = y1 + comprimento2 * cos(angulo2);

  line(0, 0, x1, y1);
  fill(50, 134, 214);
  ellipse(x1, y1, massa1, massa1);

  line(x1, y1, x2, y2);
  fill(50, 134, 214);
  ellipse(x2, y2, massa2, massa2);

  velocidadeAngulo1 += aceleracaoAngulo1;
  velocidadeAngulo2 -= aceleracaoAngulo2;
  angulo1 += velocidadeAngulo1;
  angulo2 -= velocidadeAngulo2;

  velocidadeAngulo1 *= 0.99999;
  velocidadeAngulo2 *= 0.99999;

  translate(0, 0);
  strokeWeight(5);
  stroke(200, 0, 0);
  if (frameCount > 1) {
    line(px2, py2, x2, y2);
  };
  px2 = x2;
  py2 = y2;
};
