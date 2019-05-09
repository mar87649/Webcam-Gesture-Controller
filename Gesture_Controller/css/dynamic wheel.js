var wheel = function(d){
  d.setup = function(){
    d.createCanvas(300, 300).parent('wheelPanel');
    d.background(101)
    d.img1 = d.loadImage('wheel.png'); // Load the image
    d.angleMode(d.DEGREES);
    d.imageMode(d.CENTER);
    d.angle = 0;

  }

  d.draw = function(){
    d.push();
    d.translate(d.width / 2, d.height / 2);
    d.rotate(d.angle);
    d.image(d.img1, 0, 0, 300, 300);
    d.pop();
  }
}

var dynamicwheel = new p5(wheel);
