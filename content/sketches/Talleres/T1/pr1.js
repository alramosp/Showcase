let img;

function preload() {
  img = loadImage('/showcase/content/sketches/Taller1/Lobo.jpg');
  
}

function setup() {
  createCanvas(400,400);
  noLoop();
}
function draw() {
  image(img, 0, 0);
}

