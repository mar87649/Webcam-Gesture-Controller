function takeLeft(angle) {
    switch(angle){
      case 90:  classifier.addImage('left at 90'); replace(0, video.get(bB_x, bB_y/2, bB_w, bB_h)); break;
      case 60:  classifier.addImage('left at 60'); replace(1, video.get(bB_x, bB_y/2, bB_w, bB_h)); break;
      case 30:  classifier.addImage('left at 30'); replace(2, video.get(bB_x, bB_y/2, bB_w, bB_h)); break;
    }
}

function takeCenter(angle) {
    classifier.addImage('center');
    replace(3, video.get(bB_x, bB_y/2, bB_w, bB_h));
}

function takeRight(angle) {
    switch(angle){
      case 90:  classifier.addImage('right at 90'); replace(6, video.get(bB_x, bB_y/2, bB_w, bB_h)); break;
      case 60:  classifier.addImage('right at 60'); replace(5, video.get(bB_x, bB_y/2, bB_w, bB_h)); break;
      case 30:  classifier.addImage('right at 30'); replace(4, video.get(bB_x, bB_y/2, bB_w, bB_h)); break;
    }
}

function replace(index, replacement){
  snapshots.splice(index, 1, replacement)
}
