
let mobilenet;
let classifier;
let video;
let label = 'test';
let leftDirection;
let noDirection;
let rightDirection;
let trainButton;
const seconds = 3;
var direction;
var angle;
var snapbutton;


function draw() {
  background(0);
  image(video, 0, 0, 320, 240);
  fill(255);
  textSize(16);
  text(label, 10, height - 10);
}

function setup() {
  createCanvas(320, 270).parent('canvasContainer');
  video = createCapture(VIDEO).parent('canvasContainer');
  video.hide();
  background(0);

  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  mobilenet.numClasses=3;
  classifier = mobilenet.classification(video, videoReady);

  webcamPannel();

}

function webcamPannel(){
  auto = createButton('auto').parent('canvasContainer');
  auto.mousePressed(function() {
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
            gestureCountdown(seconds, "left", 45);
          }, i*m*1000);
            break;
          case 3 :
            setTimeout(function(){
            gestureCountdown(seconds, "left", 15);
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
            gestureCountdown(seconds, "right", 45);
          }, i*m*1000);
            break;
          case 7 :
            setTimeout(function(){
            gestureCountdown(seconds, "right", 15);
          }, i*m*1000);
            break;
          case 8 :
            document.getElementById("counter").innerHTML =  "gestures taken";
            break;
        }
      }
  });

  leftDirection = createButton('left').parent('canvasContainer');
  leftDirection.mousePressed(function() {
    setTimeout(takeLeft(), 3000);
    classifier.addImage('left');
  });

  upDirection = createButton('up').parent('canvasContainer');
  upDirection.mousePressed(function() {
    setTimeout(takeCenter, 3000);
    classifier.addImage('up');
  });

  rightDirection = createButton('right').parent('canvasContainer');
  rightDirection.mousePressed(function() {
    setTimeout(takeRight, 3000);
    classifier.addImage('right');
  });

  trainButton = createButton('train').parent('canvasContainer');
  trainButton.mousePressed(function() {
    classifier.train(whileTraining);
  });
}
