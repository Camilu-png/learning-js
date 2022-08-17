function cookingStatus(time) {
  if (typeof time === "undefined") {
    return "You forgot to set the timer.";
  }
  if (time === 0) {
    return "Lasagna is done.";
  } else {
    return "Not done, please wait.";
  }
}

function preparationTime(layersArray, time) {
  if (typeof time === "undefined") {
    time = 2;
  }
  return time * layersArray.length;
}

