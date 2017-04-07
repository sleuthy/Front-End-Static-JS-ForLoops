for (var i = 5; i < 120; i=i+10) { 
    console.log("Current value is " + i);
}

for (var d = 4096; d >= 1; d = d / 2) {
	console.log("Other current value is " + d);
}

var presidents = ["Barack Obama", "Bill Clinton", "Jimmy Carter"]
for (var i = 0; i < presidents.length; i++) {
	console.log("President #" + (i + 1) + " was " + presidents[i]);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var varietyOfAnt in antSpecies) {
	console.log(varietyOfAnt);
}
