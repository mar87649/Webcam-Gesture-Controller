
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
var img1;
var angle2;
//snapshot variables
var snap1;
var snap2;
var snap3;
var snap4;
var snap5;
var snap6;
var snap7;
let snapshots;
//replacement variables
var index;
var replacement;



function setup() {
  //create new webcam - snapshots taken from here
  createCanvas(300, 300);
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  //boundary box
  // let bBox = get(bB_x, bB_y, bB_w, bB_h);
//tensorflow setup
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  mobilenet.numClasses=7;
  classifier = mobilenet.classification(video, videoReady);
  // Load wheel the image
  img1 = loadImage('wheel.png');
  //create buttons fom buttons file
  buttons();
 //Create array of images for replacing with snapshots
  snapshots = [img1, img1, img1, img1, img1, img1, img1];

  //webcam for viewing only
  var webcanPanel = new p5(webcam, 'webcamPanel');
  //create new dynamic wheel pannel
  var dynamicwheel = new p5(wheel);
  //row of wheels and specified angles
  var trainedPanel1 = new p5(images, 'Image1');
    trainedPanel1.j = 0;
  var trainedPanel2 = new p5(images, 'Image2');
    trainedPanel2.j = 1;
  var trainedPanel3 = new p5(images, 'Image3');
    trainedPanel3.j = 2;
  var trainedPanel4 = new p5(images, 'Image4');
    trainedPanel4.j = 3;
  var trainedPanel5 = new p5(images, 'Image5');
    trainedPanel5.j = 4;
  var trainedPanel6 = new p5(images, 'Image6');
    trainedPanel6.j = 5;
  var trainedPanel7 = new p5(images, 'Image7');
    trainedPanel7.j = 6;
  //row of trained wheel images (snapshots)
  var trainedwheel1 = new p5(trained, 'Wheel1');
    trainedwheel1.angle = (-90);
  var trainedwheel2 = new p5(trained, 'Wheel2');
    trainedwheel2.angle = (-60);
  var trainedwheel3 = new p5(trained, 'Wheel3');
    trainedwheel3.angle = (-30);
  var trainedwheel4 = new p5(trained, 'Wheel4');
    trainedwheel4.angle = (0);
  var trainedwheel5 = new p5(trained, 'Wheel5');
    trainedwheel5.angle = (30);
  var trainedwheel6 = new p5(trained, 'Wheel6');
    trainedwheel6.angle = (60);
  var trainedwheel7 = new p5(trained, 'Wheel7');
    trainedwheel7.angle = (90);

    let directions = ['left', 'center', 'right']
    let angles = [0, 30, 60, 90]
}

// function draw() {
//   background(51);
//   // image(video, 0, 0, 300, 300);
//   // fill(0);
//   textSize(16);
//   text(label, 10, height - 10);
//
//   // w = 100;
//   // h = 100;
//   // x = 0;
//   // y = 0;
//   // for(var i = 0; i < snapshots.length; i++){
//   //   image(snapshots[i], x, y, w, h);
//   //   x = x + w;
//   //   if(x>200){
//   //     x = 0;
//   //     y = y+100;
//   //   }
//   // }
//
//
//   image(video, 0, 0, webC_w, webC_h*2);
//
//   noFill();
//   stroke('rgb(0,255,0)');
//   strokeWeight(3);
//   rect(bB_x, bB_x, bB_w, bB_h);
//
//
//   let bBox = get(bB_x, bB_y, 150, 150);
//   image(bBox, 0, 0, 300, 300);
//
// }
