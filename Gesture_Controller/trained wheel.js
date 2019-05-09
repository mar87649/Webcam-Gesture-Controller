var snapHight = 100;
var snapWidth = 100;

var trained = function(w){
  w.setup = function(){
    w.createCanvas(snapHight, snapWidth);
    w.background(100);
    w.img1 = w.loadImage('wheel.png'); // Load the image
    w.angleMode(w.DEGREES);
    w.imageMode(w.CENTER);
  }

  w.trainedWheel = function(){
    w.push();
    w.translate(w.width / 2, w.height / 2);
    w.rotate(w.angle)
    w.image(w.img1, 0, 0, 100, 100);
    w.pop();
  }


  w.draw = function(){
    w.trainedWheel();
  }
}
