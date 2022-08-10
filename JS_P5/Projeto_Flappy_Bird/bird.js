function Bird() {
    this.y = height / 2;
    this.x = 64;
    this.gravidade = 1;
    this.velocidade = 0;
    this.cor = '#CBBB35';
    this.raio = 16;

    this.show = function() {
        fill(this.cor);
        ellipse(this.x, this.y, this.raio * 2, this.raio * 2);
    };

    this.update = function() {
        this.velocidade += this.gravidade;
        this.y += this.velocidade;

        if (this.y > height) {
            this.y = height;
            this.velocidade = 0;
            background(192, 87, 90);
            this.cor = 100;
        };

        if (this.y < 0) {
            this.y = 0;
            this.velocidade = 0;
        };
    };

    this.voa = function() {
        this.velocidade = -15;
    };
};
