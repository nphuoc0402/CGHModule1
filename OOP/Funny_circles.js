let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

window_width = window.innerWidth;
window_height = window.innerHeight;

canvas.width = window_width;
canvas.height = window_height;


let hit_counter = 0;

class Circle {
  constructor(x,y, radius, speed, color) {
    this.x = x;
    this.y =y;
    this.radius = radius;
    this.speed = speed;
    this.dx = 1 * this.speed;
    this.dy = 1 * this.speed;
    this.color = color;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.fill();
    context.stroke();
    context.closePath();
  }

  update() {
    this.draw(context);

    if (this.x + this.radius > window_width) {
      this.dx = -this.dx;
      hit_counter++;
    }

    if (this.x - this.radius < 0) {
      this.dx = -this.dx;
      hit_counter++;
    }

    if (this.y - this.radius < 0) {
      this.dy = -this.dy;
      hit_counter++;
    }

    if (this.y + this.radius > window_height) {
      this.dy = -this.dy;
      hit_counter++;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}
function getRandomHex() {
  return Math.floor(Math.random() * 255);
}
function getRandomColor() {
  let red = this.getRandomHex();
  let green = this.getRandomHex();
  let blue = this.getRandomHex();
  return `rgb(${red},${blue},${green})`;
}

let getDistance = function (x1,y1, x2,y2) {
  let result = Math.sqrt(
    Math.pow(x2 - x1, 2) + Math.pow(y2 -y1, 2)
  );
  return result;
};

let randomNumber = function (min, max) {
  let result = Math.random() * (max - min) + min;
  return result;
};

let all_circles = [];

for (let i = 0; i < 30; i++) {
  let radius = Math.floor(Math.random() * 80);
  let random_x = randomNumber(radius, window_width - radius);
  let random_y = randomNumber(radius, window_height - radius);

  for (let a = 0; a < all_circles.length; a++) {
    if (
      getDistance(
        random_x,
        random_y,
        all_circles[a].x,
        all_circles[a].ypos
      ) -
        radius +
        all_circles[a].radius <
      0
    ) {
      random_x = randomNumber(radius, window_width - radius);
      random_y = randomNumber(radius, window_height - radius);
    }
    a = all_circles.length;
  }

  let my_circle = new Circle(
    random_x,
    random_y,
    radius,
    2,
    getRandomColor(),
   
  );
  all_circles.push(my_circle);
}

let updateCircle = function () {
  requestAnimationFrame(updateCircle);
  context.clearRect(0, 0, window_width, window_height);

  all_circles.forEach((element) => {
    element.update();
  });
};

updateCircle();
