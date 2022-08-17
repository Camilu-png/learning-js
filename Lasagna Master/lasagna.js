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

console.log(cookingStatus(0));
console.log(cookingStatus(1));
console.log(cookingStatus());
