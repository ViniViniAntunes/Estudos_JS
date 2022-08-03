var tamanhoLetra = 26;
var fluxos = [];

function setup() {
  createCanvas(500, 500);
  background(0);
  
  var x = 0;
  
  for (var i = 0; i <= width / tamanhoLetra; i++) {
    var fluxo = new Fluxo();
    fluxo.geraLetras(x, random(-2 * width, 0));
    fluxos.push(fluxo);
    x += tamanhoLetra;
  }
  textSize(tamanhoLetra);
}

function draw() {
  background(0, 150);
  fluxos.forEach(function(fluxo) {
    fluxo.renderiza();
  });
}

function Letra(x, y, velocidade, first) {
  this.x = x;
  this.y = y;
  this.valor = '';
  this.velocidade = velocidade;
  this.tempoTroca = round(random(20, 40));
  this.first = first;
  
  this.setLetraAleatoria = function() {
    if(frameCount % this.tempoTroca == 0) {
      this.valor = String.fromCharCode(
      0x30A0 + round(random(0, 96))
     ); 
    }
  }
  
  this.chuva = function() {
    if(this.y > height) {
      this.y = 0;
    } else {
      this.y += this.velocidade;
    }
  }
}

function Fluxo() {
  this.letras = [];
  this.totalLetras = int(random(4, 10));
  this.velocidade = round(random(2, 5));
  
  this.geraLetras = function(x, y) {
    var first = round(random(0, 4)) == 1;
    for (var i = 0; i <= this.totalLetras; i++) {
      letra = new Letra(x, y, this.velocidade, first);
      letra.setLetraAleatoria();
      this.letras.push(letra);
      y -= tamanhoLetra;
      first = false;
    }
  }
  
  this.renderiza = function() {
    this.letras.forEach(function(elemento) {
      if (elemento.first) {
        fill(180, 255, 180);
      } else {
        fill(0, 255, 70);
      }
      text(elemento.valor, elemento.x, elemento.y);
      elemento.chuva();
      elemento.setLetraAleatoria();
    });
  } 
}
