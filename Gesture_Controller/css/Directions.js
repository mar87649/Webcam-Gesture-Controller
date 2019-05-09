
function takeLeft(angle) {
  for (var i = 0; i < 10; i++) {
    switch(angle){
      case 90:  classifier.addImage('left at 90'); break;
      case 60:  classifier.addImage('left at 60'); break;
      case 30:  classifier.addImage('left at 30'); break;
    }
    // classifier.addImage('right');
  }
  takesnap();
}


function takeCenter(angle) {
  for (var i = 0; i < 10; i++) {
    // classifier.addImage('center');
  }
  takesnap();
}

function takeRight(angle) {
  for (var i = 0; i < 10; i++) {
    switch(angle){
      case 90:  classifier.addImage('right at 90'); break;
      case 60:  classifier.addImage('right at 60'); break;
      case 30:  classifier.addImage('right at 30'); break;
    }
    // classifier.addImage('right');
  }
  takesnap();
}

function gestureCountdown(seconds, direction, angle){
  let counter = seconds;
  let timerId = setTimeout(
    function tick(){
      if (counter < 0){
        switch(direction){
          case "left":  takeLeft(angle);    break;
          case "up":    takeCenter(angle);  break;
          case "right": takeRight(angle);   break;
        }
        document.getElementById("counter").innerHTML = direction + " gesture taken at " + angle + " degrees";
        clearTimeout(timerId);
      }else{
        document.getElementById("counter").innerHTML =  "taking " + direction + " gesture at " + angle + " degrees in " + counter;
        counter = counter - 1;
        timerId = setTimeout(tick, 1000);
      }
    }, 1000);
}


// function takeLeft() {
//   var i;
//   for (i = 0; i < 10; i++) {
//     classifier.addImage('left');
//   }
// }
//
//
// function takeUp() {
//   var i;
//   for (i = 0; i < 10; i++) {
//     classifier.addImage('up');
//   }
// }
//
// function takeRight() {
//   var i;
//   for (i = 0; i < 10; i++) {
//     classifier.addImage('right');
//   }
// }
