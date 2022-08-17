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

function quantities(layersArray) {
  return layersArray
    .filter((layers) => layers == "noodles" || layers == "sauce")
    .reduce(function (accumulator, currentValue) {
      if (accumulator != undefined && currentValue in accumulator) {
        accumulator[currentValue]++;
      } else {
        accumulator[currentValue] = 1;
      }
      return accumulator;
    }, {});
}
