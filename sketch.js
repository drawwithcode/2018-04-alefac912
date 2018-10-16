function preload() {

}

// objects declaration
var myBasket = {};
var myBall = {};
var score = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // basketball instance
  myBall = new ball(width / 2, height / 2);
  myBall.speed = 5;
}

function draw() {

  // basket playground
  background('#fac912');

  strokeWeight(10);
  stroke('#ffffff');

  fill('#203190');
  rectMode(CENTER);
  rect(width / 2, height / 2, width - 100, height - 100);

  noFill()
  line(width / 2, 50, width / 2, height - 50);
  ellipse(width / 2, height / 2, 300);

  angleMode(RADIANS);
  arc(width - 50, height / 2, height - 200, height - 200, PI / 2, 3 * PI / 2, PIE);
  arc(50, height / 2, height - 200, height - 200, 3 * PI / 2, PI / 2, PIE);

  //baskets instances - left
  if (mouseX < width / 2 && mouseY < height - 120 && mouseY > 120) {
    myBasket = new baskets(60, mouseY);
    myBasket.displayBasket();
  } else {
    if (mouseX < width / 2 && mouseY > height - 120) {
      myBasket = new baskets(60, height - 120);
      myBasket.displayBasket();
    } else {
      if (mouseX < width / 2 && mouseY < 120) {
        myBasket = new baskets(60, 120);
        myBasket.displayBasket();
      }
    }
  }

  //baskets instances - right
  if (mouseX > width / 2 && mouseY < height - 120 && mouseY > 120) {
    myBasket = new baskets(width - 180, mouseY);
    myBasket.displayBasket();
  } else {
    if (mouseX > width / 2 && mouseY > height - 120) {
      myBasket = new baskets(width - 180, height - 120);
      myBasket.displayBasket();
    } else {
      if (mouseX > width / 2 && mouseY < 120) {
        myBasket = new baskets(width - 180, 120);
        myBasket.displayBasket();
      }
    }
  }

  // myBall
  myBall.moveBall();
  myBall.displayBall();

  textSize(30);
  fill('#203190');
  text("Move the baskets and catch the ball!", 60, 40);
  text("Score: " + score, width - 160, height - 20);

}

// baskets object
function baskets(_x, _y) {
  this.x = _x;
  this.y = _y;

  this.color = 'red';

  // displayBasket
  this.displayBasket = function() {
    noFill();
    strokeWeight(10);
    stroke(this.color);
    ellipse(this.x + 60, this.y, 100);
  }
}

// ball object
function ball(_x, _y) {
  this.x = _x;
  this.y = _y;

  // displayBall
  this.displayBall = function() {
    noStroke();
    fill('#f97f06');
    ellipse(this.x, this.y, 80);
  }

  var xDir = 1;
  var yDir = 1;
  this.speed = 10;

  // moveBall
  this.moveBall = function() {

    this.x += this.speed * xDir;
    this.y += this.speed * yDir;

    // bouncing
    if (this.y > height - 100 || this.y < 100) {
      yDir = -1 * yDir;
    }
    if (this.x > width - 100 || this.x < 100) {
      xDir = -1 * xDir;

      // score
      if (this.y < mouseY + 50 && this.y > mouseY - 50 && this.x > 60 && this.x < 180) {
        score += 1;
      }
      if (this.y < mouseY + 50 && this.y > mouseY - 50 && this.x > width - 180 && this.x < width - 60) {
        score += 1;
      }
    }

  }

}
