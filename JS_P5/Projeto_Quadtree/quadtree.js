class Ponto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  };
};

class Retangulo {
  constructor(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
  };

  contem(ponto) {
    let condicao1 = ponto.x >= this.x - this.largura; // Está à direita da fronteira esquerda?
    let condicao2 = ponto.x <= this.x + this.largura; // Está à esquerda da fronteira direita?
    let condicao3 = ponto.y >= this.y - this.altura; // Está acima da fronteira inferior?
    let condicao4 = ponto.y <= this.y + this.altura; // Está abaixo da fronteira superior?
    
    return (condicao1 && condicao2 && condicao3 && condicao4);
  };
};

class QuadTree {
  constructor(fronteira, capacidade) {
    this.fronteira = fronteira;
    this.capacidade = capacidade;
    this.pontos = [];
    this.dividido = false;
  };

  subdivide() {
    let x = this.fronteira.x;
    let y = this.fronteira.y;
    let largura = this.fronteira.largura;
    let altura = this.fronteira.altura;

    let ne = new Retangulo(x + largura / 2, y - altura / 2, largura / 2, altura / 2);
    this.northeast = new QuadTree(ne, this.capacidade);
    
    let nw = new Retangulo(x - largura / 2, y - altura / 2, largura / 2, altura / 2);
    this.northwest = new QuadTree(nw, this.capacidade);
      
    let se = new Retangulo(x + largura / 2, y + altura / 2, largura / 2, altura / 2);
    this.southeast = new QuadTree(se, this.capacidade);
      
    let sw = new Retangulo(x - largura / 2, y + altura / 2, largura / 2, altura / 2);
    this.southwest = new QuadTree(sw, this.capacidade);

    this.dividido = true;
  };

  inserePonto(ponto) {
    if (!this.fronteira.contem(ponto)) {
      return false;
    };

    if (this.pontos.length < this.capacidade) {
      this.pontos.push(ponto);
      return true;
    } else {
    
      if (!this.dividido) {
        this.subdivide();
      }
    
      if (this.northeast.inserePonto(ponto)) {
        return true;
      } else if (this.northwest.inserePonto(ponto)) {
        return true;
      } else if (this.southeast.inserePonto(ponto)) {
        return true;
      } else if (this.southwest.inserePonto(ponto)) {
        return true;
      };
    };
  };


  show() {
    stroke(255);
    strokeWeight(1);
    noFill();
    rectMode(CENTER);
    rect(this.fronteira.x, this.fronteira.y, this.fronteira.largura * 2, this.fronteira.altura * 2);
    
    if (this.dividido) {
      this.northeast.show();
      this.northwest.show();
      this.southeast.show();
      this.southwest.show();
    };

    for (let ponto of this.pontos) {
      strokeWeight(2);
      point(ponto.x, ponto.y);
    };
  };
};
