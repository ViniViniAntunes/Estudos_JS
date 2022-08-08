function Firework (cor) {
    this.cor = cor;
    this.firework = new Particula(random(width), height, true, this.cor);
    this.explodiu = false;
    this.fragmentos = [];

    this.done = function () {
        if (this.explodiu && this.fragmentos.length === 0) {
            return true;
        } else {
            return false;
        };
    };

    this.update = function () {
        if (!this.explodiu) {
            this.firework.aplicaForca(gravidade);
            this.firework.update();
            if (this.firework.velocidade.y >= 0) {
                this.explodiu = true;
                this.explodir();
            };
        };
        for (var i = this.fragmentos.length - 1; i >= 0; i--) {
            this.fragmentos[i].aplicaForca(gravidade);
            this.fragmentos[i].update();
            if (this.fragmentos[i].done()) {
                this.fragmentos.splice(i, 1);
            };
        };
    };

    this.explodir = function () {
        for (var i = 1; i < 50; i++) {
            var fragmento = new Particula(this.firework.posicao.x, this.firework.posicao.y, false, this.cor);
            this.fragmentos.push(fragmento);
        };
    };

    this.show = function () {
        if (!this.explodiu) {
            this.firework.show();
        };
        for (var i = 1; i < this.fragmentos.length; i++) {
            this.fragmentos[i].show();
        };
    };
};
