var speed = 3;

var wheel = function(d){

  d.setup = function(){
    d.createCanvas(300, 300).parent('dynamic wheel');
    d.img1 = d.loadImage('wheel.png'); // Load the image
    d.angleMode(d.DEGREES);
    d.imageMode(d.CENTER);
    d.angle=-90;
  }

  d.draw = function(){
    d.push();
    d.background(100)
    d.translate(d.width / 2, d.height / 2);
    d.rotate(d.angle);
    d.image(d.img1, 0, 0, 300, 300);
    d.Turn();
    d.pop();
  }

  d.turnWheelTo = function(angle){
    d.dist = angle - d.angle

    if (d.angle != angle){
        d.angle = d.angle + (Math.sign(d.dist)*speed);
    }
}

  d.Turn = function(){
    switch(label){
      case 'left at 90' : d.turnWheelTo(-90); break;
      case 'left at 60' : d.turnWheelTo(-60); break;
      case 'left at 30' : d.turnWheelTo(-30); break;
      case 'center'     : d.turnWheelTo(0);   break;
      case 'right at 30': d.turnWheelTo(30);  break;
      case 'right at 60': d.turnWheelTo(60);  break;
      case 'right at 90': d.turnWheelTo(90);  break;
    }

  }



}


// function Turn(){
//   var current = 0;
//   switch(label){
//     case 'left at 90' : turnWheelTo(-90, current);
//     case 'left at 60' : turnWheelTo(-60, current);
//     case 'left at 30' : turnWheelTo(-30, current);
//     case 'center'     : turnWheelTo(0, current);
//     case 'right at 90': turnWheelTo(90, current);
//     case 'right at 60': turnWheelTo(60, current);
//     case 'right at 30': turnWheelTo(30, current);
//   }
// }

// var current = 0;
// function turnWheelTo(angle, current){
//   distance = angle-current;
//   while(current != angle){
//     if (distance < 0){
//       angle = angle-1;
//     }else if (distance>0) {
//       angle = angle+1
//     }
//   }
//   current = angle;
// }
