let img;

function preload() {
  img = loadImage('/showcase/content/sketches/practicas/P1/leon.png');
  
}

function setup() {
  createCanvas(2000,2000);
  noLoop();
}
function draw() {
  image(img, 0, 0);
}

