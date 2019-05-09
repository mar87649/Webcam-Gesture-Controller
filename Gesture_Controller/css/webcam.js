var webcam = function(c){

  c.setup = function(){
    c.createCanvas(300, 300).parent('webcamPanel');
    c.video = c.createCapture(c.VIDEO);
    c.video.size(300, 300);
    c.video.hide();

    c.auto = c.createButton('auto').parent('webcamPanel');
    c.auto.mousePressed(function(){
      c.recordGestures();
    });

    c.leftDirection = c.createButton('left').parent('webcamPanel');
    c.leftDirection.mousePressed(function() {
      c.setTimeout(takeLeft(), 3000);
      classifier.addImage('left');
        takesnap();
    });

    c.upDirection = c.createButton('up').parent('webcamPanel');
    c.upDirection.mousePressed(function() {
      setTimeout(takeCenter, 3000);
      classifier.addImage('up');
        takesnap();
    });

    c.rightDirection = c.createButton('right').parent('webcamPanel');
    c.rightDirection.mousePressed(function() {
      setTimeout(takeRight, 3000);
      classifier.addImage('right');
        takesnap();
    });

    c.trainButton = c.createButton('train').parent('webcamPanel');
    c.trainButton.mousePressed(function() {
      classifier.train(whileTraining);
    });

  }

  c.draw = function(){
      c.background(255);
      c.image(c.video, 0, 0, 300, 300);
      c.fill(0);
      c.textSize(16);
      c.text(label, 10, height - 10);
  }

  c.recordGestures = function(){
    let m = 6;
    for(var i = 0; i < 9; i++){
      switch(i){
        case 0 :
          setTimeout(function(){
          gestureCountdown(seconds, "left", 90);
        }, i*m*1000);
          break;
        case 1 :
          setTimeout(function(){
          gestureCountdown(seconds, "left", 60);
        }, i*m*1000);
          break;
        case 3 :
          setTimeout(function(){
          gestureCountdown(seconds, "left", 30);
        }, i*m*1000);
          break;
        case 4 :
          setTimeout(function(){
          gestureCountdown(seconds, "center", 0);
        }, i*m*1000);
          break;
        case 5 :
          setTimeout(function(){
          gestureCountdown(seconds, "right", 90);
        }, i*m*1000);
          break;
        case 6 :
          setTimeout(function(){
          gestureCountdown(seconds, "right", 60);
        }, i*m*1000);
          break;
        case 7 :
          setTimeout(function(){
          gestureCountdown(seconds, "right", 30);
        }, i*m*1000);
          break;
        case 8 :
          document.getElementById("counter").innerHTML =  "gestures taken";
          break;
      }
    }
  }
}

var webcanPanel = new p5(webcam);
