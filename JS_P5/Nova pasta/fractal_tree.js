var angulo = 0;
var slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, PI/2, PI/4, 0.01);
}

function draw() {
  background(42);
  angle = slider.value();
  
  // var a = createVector(width / 2, height);
  // var b = createVector(width / 2, height - 100);
  // var root = new Branch(a, b)
  
  stroke(252);
  translate(200, height);
  branch(100);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 2 / 3);
    pop();
    push();
    rotate(-angle);
    branch(len * 2 / 3);
    pop();
  }
}