var raining = false;
var temperature = (16);

if (raining) {
  console.log("Don't forget your umbrella!");
} else {
  console.log("Leave your umbrella at home!")
}

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15){
  console.log("Shoet sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
