class Hero {
  constructor(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
  }
  setImage(image) {
    this.image = image;
  }
  setSpeed(speed) {
    this.speed = speed;
  }

  getHeroElement() {
    return (
      '<img width="' +
      this.size +
      '"' +
      ' height="' +
      this.size +
      '"' +
      ' src="' +
      this.image +
      '"' +
      ' style="top: ' +
      this.top +
      "px; left:" +
      this.left +
      'px;position:absolute;" />'
    );
  }

  moveRight() {
    console.log(this.speed);
    this.left += this.speed;
    //   console.log('ok: ' + this.left);
  }
  moveLeft() {
    this.left -= this.speed;
  }
  moveTop() {
    this.top -= this.speed;
  }
  moveBottom() {
    this.top += this.speed;
  }
}

let hero = new Hero("pikachu.png", 20, 30, 100,100);
hero.setSpeed(70);
hero.setImage("loc.jpg");
function start() {
  if (hero.left < window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
    hero.moveRight();
  }
  else if (hero.top < window.innerHeight - hero.size ) {
      
    hero.moveBottom();
  }else if( hero.top == window.innerHeight - hero.size || hero.left > 0){
      hero.moveLeft();}
  else{
    if( hero.top >0){
    hero.moveTop();

    }
  }
//   }else if(){
//       hero.moveTop();
//   }

  document.getElementById("game").innerHTML = hero.getHeroElement();
  setTimeout(start, 50);
}

start();
