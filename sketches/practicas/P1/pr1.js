let imgg;

function preload() {
  imgg = loadImage('/showcase/content/sketches/practicas/P1/leon.png');
  
}

function setup() {
  createCanvas(400,400);
  noLoop();
}
function draw() {
  image(imgg, 0, 0);
}

