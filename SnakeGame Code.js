let gameState = 'game';
let headX = 0, headY = 0;
let moveX = 0, moveY = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (gameState == 'game')
    {
      background(100,100,100);
      
      fill(0, 200, 50);
      stroke(0);
      rect(headX, headY, 20, 20);
      
      if (frameCount % 5 == 0)
      {
        headX += moveX
        headY += moveY
      }
    }
  
}