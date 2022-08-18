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
  let newLayer = layersArray
    .filter((layers) => layers == "noodles" || layers == "sauce")
    .reduce(function (accumulator, currentValue) {
      if (accumulator != undefined && currentValue in accumulator) {
        accumulator[currentValue]++;
      } else {
        accumulator[currentValue] = 1;
      }
      return accumulator;
    }, {});
  newLayer.noodles = newLayer.noodles * 50;
  newLayer.sauce = newLayer.sauce * 0.2;
  return newLayer;
}

function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

function scaleRecipe(recipeObj, portion) {
  let newRecipe = Object.assign({}, recipeObj);
  let claves = Object.keys(recipeObj);
  for (let i = 0; i < claves.length; i++) {
    newRecipe[claves[i]] = (recipeObj[claves[i]] * portion) / 2;
  }
  return newRecipe;
}
