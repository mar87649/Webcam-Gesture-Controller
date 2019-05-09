var button1;
var button2;
var button3;
var button4;
var button5;
var button6;
var button7;

var buttonNname1 = '-90';
var buttonNname2 = '-60';
var buttonNname3 = '-30';
var buttonNname4 = 'center';
var buttonNname5 = '+30';
var buttonNname6 = '+60';
var buttonNname7 = '+90';

function buttons(){
  button1 = createButton(buttonNname1).parent('button1');
  button1.mousePressed(function(){
    ///Do the thing
    takeLeft(90);
    // snap1 = video.get();//image(video, 0, 0)
    // replace(0, video.get())
  });

  button2 = createButton(buttonNname2).parent('button2');
  button2.mousePressed(function(){
    ///Do the thing
    takeLeft(60);
    // replace(1, video.get())
  });

  button3 = createButton(buttonNname3).parent('button3');
  button3.mousePressed(function(){
    ///Do the thing
    takeLeft(30);
    // replace(2, video.get())
  });

  button4 = createButton(buttonNname4).parent('button4');
  button4.mousePressed(function(){
    ///Do the thing
    takeCenter(0);
    // replace(3, video.get())
  });

  button5 = createButton(buttonNname5).parent('button5');
  button5.mousePressed(function(){
    ///Do the thing
    takeRight(30);
    // replace(4, video.get())
  });

  button6 = createButton(buttonNname6).parent('button6');
  button6.mousePressed(function(){
    ///Do the thing
    takeRight(60);
    // replace(5, video.get())
  });

  button7 = createButton(buttonNname7).parent('button7');
  button7.mousePressed(function(){
    ///Do the thing
    takeRight(90);
    // replace(6, video.get())
  });

  auto = createButton('auto').parent('webButtons');
  auto.mousePressed(function(){
    TimerFun();
  });

  trainButton = createButton('train').parent('webButtons');
  trainButton.mousePressed(function() {
    classifier.train(whileTraining);
  });
}
