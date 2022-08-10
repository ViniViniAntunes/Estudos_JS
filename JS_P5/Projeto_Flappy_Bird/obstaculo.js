function Obstaculo() {
    this.topo = random(height / 2);
    this.base = random(height / 2);
    this.x = width;
    this.largura = 35;
    this.velocidade = 2;

    this.colidiu = function(bird) {
        var confereAltura = bird.y < this.topo || bird.y > height - this.base;
        var confereLargura = bird.x > this.x && bird.x < this.x + this.largura;

        if (confereAltura && confereLargura) {
            return true;
        }
        return false;
    };

    this.show = function() {
        fill('#75BF2E');
        rect(this.x, 0, this.largura, this.topo);
        rect(this.x, height - this.base, this.largura, this.base);
    };

    this.update = function() {
        this.x -= this.velocidade;
    };

    this.jaPassou = function() {
        if (this.x < -this.largura) {
            return true;
        } else {
            return false;
        }
    };
};
