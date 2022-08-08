function Particula(x, y, firework, cor) {
  this.posicao = createVector(x, y);
  this.firework = firework;
  this.vidaUtil = 255;
  this.cor = cor;

  if (this.firework) {
      this.velocidade = createVector(0, random(-20, -8));
  } else {
      this.velocidade = p5.Vector.random2D();
      this.velocidade.mult(random(2, 10));
  };
  
  this.aceleracao = createVector(0, 0);

  this.aplicaForca = function (forca) {
    this.aceleracao.add(forca);
  };

  this.update = function () {
      if (!this.firework) {
          this.velocidade.mult(0.9);
          this.vidaUtil -= 4;
      };

      this.velocidade.add(this.aceleracao);
      this.posicao.add(this.velocidade);
      //   this.aceleracao.mult(0);
  };

  this.done = function () {
      if (!this.vidaUtil < 0) {
          return true;
      } else {
          return false;
      };
  };

  this.show = function () {
      if (!this.firework) {
          strokeWeight(2);
          stroke(this.cor, 150, 150, this.vidaUtil);
      } else {
          strokeWeight(4);
          stroke(this.cor, 150, 150);
      };

      point(this.posicao.x, this.posicao.y);
  };
};
