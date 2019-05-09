var trained = function(w){
  w.setup = function(){
    w.createCanvas(300, 300).parent('trinedWheel');
    w.background(100);
    w.img1 = w.loadImage('wheel.png'); // Load the image
    w.angleMode(w.DEGREES);
    w.imageMode(w.CENTER);
  }

  w.trainedWheel = function(){
    w.push();
    w.translate(w.width / 2, w.height / 2);
    w.rotate(0);
    w.image(w.img1, 0, 0, 100, 100);
    w.pop();

  //Left
    w.push();
    w.translate(50, 50);
    w.rotate(-90);
    w.image(w.img1, 0, 0, 100, 100);
    w.pop();

    w.push();
    w.translate(150, 50);
    w.rotate(-60);
    w.image(w.img1, 0, 0, 100, 100);
    w.pop();

    w.push();
    w.translate(250, 50);
    w.rotate(-30);
    w.image(w.img1, 0, 0, 100, 100);
    w.pop();

  //Right
    w.push();
    w.translate(50, 250);
    w.rotate(90);
    w.image(w.img1, 0, 0, 100, 100);
    w.pop();

    w.push();
    w.translate(150, 250);
    w.rotate(60);
    w.image(w.img1, 0, 0, 100, 100);
    w.pop();

    w.push();
    w.translate(250, 250);
    w.rotate(30);
    w.image(w.img1, 0, 0, 100, 100);
    w.pop();
  }

  w.draw = function(){
    w.trainedWheel();
  }
}

var trainedwheel = new p5(trained);
