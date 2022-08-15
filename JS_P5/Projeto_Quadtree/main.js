let quadtree;

function setup() {
  createCanvas(800, 800);

  let fronteira = new Retangulo(400, 400, 400, 400);
  quadtree = new QuadTree(fronteira, 4);
  console.log(quadtree);

  // for (let i = 0; i < 500; i++) {
  //   let ponto = new Point(random(width), random(height));
  //   quadtree.inserePonto(ponto);
  // };

};

function draw() {
  if (mouseIsPressed) {
    for (let i = 0; i < 5; i++) {
      let ponto = new Ponto(mouseX + random(-1, 1), mouseY + random(-1, 1));
      quadtree.inserePonto(ponto);
    };
  };
  
  background(51, 51, 51);
  quadtree.show();
};
