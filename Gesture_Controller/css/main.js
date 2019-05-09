
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
let snapshots = [];



function setup() {
  createCanvas(300, 300);
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  mobilenet.numClasses=3;
  classifier = mobilenet.classification(video, videoReady);
}

function draw() {
  background(255);
  // image(video, 0, 0, 300, 300);
  fill(0);
  textSize(16);
  text(label, 10, height - 10);
}

function takesnap(){
  snapshots.push(video.get());
}
