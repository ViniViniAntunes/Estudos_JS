var bird;
var obstaculos = [];

function setup() {
  createCanvas(800, 800);
  bird = new Bird();
  obstaculos.push(new Obstaculo());
};

function draw() {
  background('#71C6CE');
  
  for (var i = obstaculos.length - 1; i >= 0; i--) {
    obstaculos[i].update();
    obstaculos[i].show();
    
    if (obstaculos[i].colidiu(bird)) {
      console.log("Ai!!!");
    };

    if (obstaculos[i].jaPassou()) {
      obstaculos.slice(i, 0);
    };
  };
  
  bird.update();
  bird.show();
  
  if (frameCount % 100 == 0) {
    obstaculos.push(new Obstaculo());
  };
  
};

function keyPressed() {
  if (key == ' ') {
    bird.voa();
  };
};
