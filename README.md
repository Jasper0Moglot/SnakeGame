let gameState = 'game';
let headX = 0, headY = 0;
let moveX = 0, moveY = 0;

let tail = [];
let appleX, appleY;
let score = 0;

function setup() {
  createCanvas(400, 400);
  spawnApple();
  textAlign(CENTER, CENTER);
  textSize(32);
}

function draw() {
  background(100, 100, 100);

  if (gameState === 'game') {
    // Малюємо яблуко
    fill(255, 0, 0);
    rect(appleX, appleY, 20, 20);

    // Малюємо хвіст
    fill(0, 150, 50);
    for (let i = 0; i < tail.length; i++) {
      rect(tail[i].x, tail[i].y, 20, 20);
    }

    // Малюємо голову
    fill(0, 200, 50);
    rect(headX, headY, 20, 20);

    // Очки
    fill(255);
    textSize(16);
    text("Score: " + score, 50, 20);

    // Рух кожні 6 кадрів
    if (frameCount % 6 === 0) {
      // Додаємо нову позицію хвоста
      if (tail.length > 0) {
        tail.unshift({ x: headX, y: headY });
        tail.pop();
      }

      // Рух голови
      headX += moveX;
      headY += moveY;

      // Телепорт
      if (headX >= 400) headX = 0;
      else if (headX < 0) headX = 380;
      if (headY >= 400) headY = 0;
      else if (headY < 0) headY = 380;

      // 💥 Перевірка на зіткнення
      for (let i = 0; i < tail.length; i++) {
        if (headX === tail[i].x && headY === tail[i].y) {
          gameState = 'gameover';
        }
      }

      // 🍎 З'їв яблуко
      if (headX === appleX && headY === appleY) {
        let last = tail.length > 0 ? tail[tail.length - 1] : { x: headX, y: headY };
        tail.push({ x: last.x, y: last.y });
        spawnApple();
        score++; // +1 очко
      }
    }

  } else if (gameState === 'gameover') {
    fill(255, 0, 0);
    textSize(32);
    text("Game Over", width / 2, height / 2 - 20);
    fill(255);
    textSize(16);
    text("Score: " + score, width / 2, height / 2 + 10);
    text("Press SPACE to restart", width / 2, height / 2 + 40);
  }
}

function keyPressed() {
  if (gameState === 'game') {
    if (keyCode === 83 && moveY === 0) { // S
      moveX = 0;
      moveY = 20;
    } else if (keyCode === 87 && moveY === 0) { // W
      moveX = 0;
      moveY = -20;
    } else if (keyCode === 68 && moveX === 0) { // D
      moveX = 20;
      moveY = 0;
    } else if (keyCode === 65 && moveX === 0) { // A
      moveX = -20;
      moveY = 0;
    }
  }

  // 🔁 Перезапуск
  if (gameState === 'gameover' && key === ' ') {
    restartGame();
  }
}

function spawnApple() {
  appleX = floor(random(0, 20)) * 20;
  appleY = floor(random(0, 20)) * 20;
}

function restartGame() {
  gameState = 'game';
  headX = 0;
  headY = 0;
  moveX = 0;
  moveY = 0;
  tail = [];
  score = 0;
  spawnApple();
}
