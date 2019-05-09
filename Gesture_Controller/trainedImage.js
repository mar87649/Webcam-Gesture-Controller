var snapHight = 100;
var snapWidth = 100;
var images = function(s){
  s.setup = function(){
    s.createCanvas(snapHight, snapWidth);
    s.j=0;
  }

  s.draw = function(){
    s.background(0);
    s.w = 100;
    s.h = 100;
    s.x = 0;
    s.y = 0;
    s.image(snapshots[s.j], s.x, s.y, snapWidth, snapHight*2);

  }
}
