let gameState = 'game';
let headX = 0, headY = 0;
let moveX = 0, moveY = 0;
let foodX = Math.floor(Math.random()*20)*20
let foodY = Math.floor(Math.random()*20)*20
let tail = [];


function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (gameState == 'game')
    {
      background(100,100,100);
      
      fill(0, 180, 50);
      stroke(0);
      rect(headX, headY, 20, 20);
      
      fill(255, 0, 0);
      rect(foodX, foodY, 20, 20);
      
      if (headX == foodX && headY == foodY)
        {
          foodX = Math.floor(Math.random()*20)*20
          foodY = Math.floor(Math.random()*20)*20
          add_tail();
        }


      if (frameCount % 5 == 0)
        {
          update_tail(headX, headY);
          headX += moveX;
          headY += moveY;
        }

      {
        headX += moveX
        headY += moveY
        
        if (headX >= 400)
          {
            headX = 0;
          }
        else if (headX <= -20)
          {
            headX = 400;
          }
        
        if (headY >= 400)
          {
            headY = 0;
          }
        else if (headY <= -20)
          {
            headY = 400;
          }
      }
    }
  
}

function keyPressed()
{
  if(keyCode == 83 && moveY != -20) //S
    {
      moveX = 0;
      moveY = 20;
    }


 else if(keyCode == 87 && moveY != 20) //W
    {
      moveX = 0;
      moveY = -20;
    }


 else if(keyCode == 68 && moveX != -20) //D
    {
      moveX = 20;
      moveY = 0;
    }


 else if(keyCode == 65 && moveX != 20) //A
    {
      moveX = -20;
      moveY = 0;
    }
}

function add_tail()
{
  tail.push({
    x: headX,
    y: headY
  })
  
}

function update_tail(targetX, targetY)
{
  if (tail.length > 0)
    {
      for (let i = 0; i < tail.length()-1; i++)
        {
          tail[i].x = tail[i-1].x;
          tail[i].y = tail[i-1].y;
        }
      tail[0].x = targetX;
      tail[0].x = targetY;
    }
}






// let gameState = 'game';
// let headX = 0, headY = 0;
// let moveX = 0, moveY = 0;

// let tail = []; // масив для зберігання хвоста
// let appleX, appleY;

// function setup() {
//   createCanvas(400, 400);
//   spawnApple();
// }

// function draw() {
//   if (gameState == 'game') {
//     background(100, 100, 100);

//     // Малюємо яблуко
//     fill(255, 0, 0);
//     rect(appleX, appleY, 20, 20);

//     // Малюємо хвіст
//     fill(0, 150, 50);
//     for (let i = 0; i < tail.length; i++) {
//       rect(tail[i].x, tail[i].y, 20, 20);
//     }

//     // Малюємо голову
//     fill(0, 200, 50);
//     rect(headX, headY, 20, 20);

//     // Рухаємо голову і хвіст
//     if (frameCount % 6 == 0) {
//       // Зберігаємо попереднє положення
//       if (tail.length > 0) {
//         tail.unshift({x: headX, y: headY}); // додаємо в початок масиву
//         tail.pop(); // видаляємо останній елемент
//       }

//       headX += moveX;
//       headY += moveY;

//       // Телепорт
//       if (headX >= 400) headX = 0;
//       else if (headX < 0) headX = 380;
//       if (headY >= 400) headY = 0;
//       else if (headY < 0) headY = 380;

//       // Перевірка чи з'їла яблуко
//       if (headX == appleX && headY == appleY) {
//         tail.push({x: headX, y: headY}); // додаємо сегмент хвоста
//         spawnApple();
//       }
//     }
//   }
// }

// function keyPressed() {
//   if (keyCode == 83 && moveY == 0) { //S
//     moveX = 0;
//     moveY = 20;
//   }
//   else if (keyCode == 87 && moveY == 0) { //W
//     moveX = 0;
//     moveY = -20;
//   }
//   else if (keyCode == 68 && moveX == 0) { //D
//     moveX = 20;
//     moveY = 0;
//   }
//   else if (keyCode == 65 && moveX == 0) { //A
//     moveX = -20;
//     moveY = 0;
//   }
// }

// function spawnApple() {
//   // Генеруємо нові координати кратні 20
//   appleX = floor(random(0, 20)) * 20;
//   appleY = floor(random(0, 20)) * 20;
// }