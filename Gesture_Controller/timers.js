var time = 0;
var counter=3;
var interval;
var button;
var direction;
var angle;
var gest;
var timer_index = 0;
var delay = -2;

function startTimer(){
  interval = setInterval(timeIt, 1000);
}

function stopTimer(){
  clearInterval(interval);
}

function timeIt(){
  displayInfo(timer_index, counter);
  counter--;
  if (counter<0){
    recordGestures(timer_index);
    if (counter<delay){
      counter=3;
        timer_index++;
        if(timer_index==7){
          stopTimer()
        }
    }
  }
  console.log(time)
  time++
}

function TimerFun(){
  startTimer();
}

function Info(direction, angle, counter){
  if(counter > 0){
    document.getElementById("counter").innerHTML =  "taking " + direction + " gesture at " + angle + " degrees in " + counter;
  }else{
    document.getElementById("counter").innerHTML = direction + " gesture taken at " + angle + " degrees";
  }
}

function recordGestures(g){
    switch (g) {
      case 0: takeLeft(90); break;
      case 1: takeLeft(60); break;
      case 2: takeLeft(30); break;
      case 3: takeCenter(0);  break;
      case 4: takeRight(30); break;
      case 5: takeRight(60); break;
      case 6: takeRight(90); break;
      default:
    }
}

function displayInfo(i, counter){
  switch (i) {
    case 0: Info('left',   '-90', counter);  break;
    case 1: Info('left',   '-60', counter);  break;
    case 2: Info('left',   '-30', counter);  break;
    case 3: Info('center', '0'  , counter);  break;
    case 4: Info('right',  '30' , counter);  break;
    case 5: Info('right',  '60' , counter);  break;
    case 6: Info('right',  '90' , counter);  break;
  }
}
