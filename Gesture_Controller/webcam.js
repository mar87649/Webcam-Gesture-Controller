//webcam properties
var webC_w = 300;
var webC_h = 300;
//bounding box properties
var bB_x = webC_w/4;
var bB_y = webC_h/4;
var bB_w = 150;
var bB_h = 150;


var webcam = function(c){

  c.setup = function(){
    c.createCanvas(webC_w, webC_h);
    c.video = c.createCapture(c.VIDEO);
    c.video.size(webC_w, webC_h);
    c.video.hide();
  }

  c.draw = function(){
      c.background(255);
      c.image(c.video, 0, 0, webC_w, webC_h);

      //bounding box
      c.noFill();
      c.stroke('rgb(0,255,0)');
      c.strokeWeight(3);
      c.rect(bB_x, bB_x, bB_w, bB_h);
  }
}
