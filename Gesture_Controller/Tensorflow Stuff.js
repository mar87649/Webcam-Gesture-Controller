function modelReady() {
  console.log('Model is ready!!!');
}

function videoReady() {
  console.log('Video is ready!!!');
}

function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    label = result;
    classifier.classify(gotResults);
  }
}


function whileTraining(loss) {
  if (loss == null) {
    document.getElementById("trainingInfo").innerHTML = 'Training Complete';
    console.log('Training Complete');
    classifier.classify(gotResults);
  } else {
    document.getElementById("trainingInfo").innerHTML = 'Training: ' + loss;
    console.log(loss);
  }
}
