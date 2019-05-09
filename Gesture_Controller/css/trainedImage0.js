var images = function(s){
  s.snapshots = [];
  s.setup = function(){
    s.createCanvas(300, 300).parent('trainedPanel');
    s.video = s.createCapture(s.VIDEO);
    s.video.size(300, 300);
    s.video.hide();
    s.button = s.createButton('snap').parent('trainedPanel');
    s.button.mousePressed(takesnap);
  }

  s.takesnap = function(){
    s.snapshots.push(s.video.get());
  }

  s.draw = function(){
    s.background(51);
    s.w = 100;
    s.h = 100;
    s.x = 0;
    s.y = 0;
    for(var i = 0; i < snapshots.length; i++){
      s.image(snapshots[i], s.x, s.y, s.w, s.h);
      s.x = s.x + s.w;
    }
  }
}

var trainedPanel = new p5(images);
