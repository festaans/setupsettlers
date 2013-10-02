function shuffle(randomness) {
  var currentIndex = randomness.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain tile to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = randomness[currentIndex];
    randomness[currentIndex] = randomness[randomIndex];
    randomness[randomIndex] = temporaryValue;
  }

  return randomness;
}
//var tile = ['wool', 'wool', 'wool', 'wool', 'wood', 'wood', 'wood', 'wood', 'clay', 'clay', 'clay', 'ore', 'ore', 'ore', 'wheat', 'wheat', 'wheat', 'wheat', 'desert'];
var numbers = [2, 3, 3, 4, 4, 5, 5, "<i>6</i>", "<i>6</i>", "<i>8</i>", "<i>8</i>", 9, 9, 10, 10, 11, 11, 12];
//
shuffle(numbers);
//
var tile = [{"name" : "desert", "number" : "R"}, {"name" : "wool", "number" : numbers.pop()}, {"name" : "wool", "number" : numbers.pop()}, {"name" : "wool", "number" : numbers.pop()}, {"name" : "wool", "number" : numbers.pop()}, {"name" : "wood", "number" : numbers.pop()}, {"name" : "wood", "number" : numbers.pop()}, {"name" : "wood", "number" : numbers.pop()}, {"name" : "wood", "number" : numbers.pop()}, {"name" : "wheat", "number" : numbers.pop()}, {"name" : "wheat", "number" : numbers.pop()}, {"name" : "wheat", "number" : numbers.pop()}, {"name" : "wheat", "number" : numbers.pop()}, {"name" : "ore", "number" : numbers.pop()}, {"name" : "ore", "number" : numbers.pop()}, {"name" : "ore", "number" : numbers.pop()}, {"name" : "clay", "number" : numbers.pop()}, {"name" : "clay", "number" : numbers.pop()}, {"name" : "clay", "number" : numbers.pop()}]
//
shuffle(tile);
//
console.log(tile);
$(document).ready(function(){
var one 		= document.getElementById('one');
var two 		= document.getElementById('two');
var three 		= document.getElementById('three');
var four 		= document.getElementById('four');
var five 		= document.getElementById('five');
var six 		= document.getElementById('six');
var seven 		= document.getElementById('seven');
var eight		= document.getElementById('eight');
var nine 		= document.getElementById('nine');
var ten 		= document.getElementById('ten');
var eleven 		= document.getElementById('eleven');
var twelth 		= document.getElementById('twelth');
var thirdteen 	= document.getElementById('thirdteen');
var fourteen 	= document.getElementById('fourteen');
var fifteen 	= document.getElementById('fifteen');
var sixteen 	= document.getElementById('sixteen');
var seventeen 	= document.getElementById('seventeen');
var eightteen 	= document.getElementById('eightteen');
var nineteen 	= document.getElementById('nineteen');
one.className = one.className + tile[0]["name"];
two.className = two.className + tile[1]["name"];
three.className = three.className + tile[2]["name"];
four.className = four.className + tile[3]["name"];
five.className = five.className + tile[4]["name"];
six.className = six.className + tile[5]["name"];
seven.className = seven.className + tile[6]["name"];
eight.className = eight.className + tile[7]["name"];
nine.className = nine.className + tile[8]["name"];
ten.className = ten.className + tile[9]["name"];
eleven.className = eleven.className + tile[10]["name"];
twelth.className = twelth.className + tile[11]["name"];
thirdteen.className = thirdteen.className  + tile[12]["name"];
fourteen.className = fourteen.className + tile[13]["name"];
fifteen.className = fifteen.className + tile[14]["name"];
sixteen.className = sixteen.className + tile[15]["name"];
seventeen.className = seventeen.className + tile[16]["name"];
eightteen.className = eightteen.className + tile[17]["name"];
nineteen.className = nineteen.className + tile[18]["name"];

document.getElementById('one').innerHTML = '<p>' + tile[0]["number"] + '</p>';
document.getElementById('two').innerHTML = '<p>' + tile[1]["number"] + '</p>';
document.getElementById('three').innerHTML = '<p>' + tile[2]["number"] + '</p>';
document.getElementById('four').innerHTML = '<p>' + tile[3]["number"] + '</p>';
document.getElementById('five').innerHTML = '<p>' + tile[4]["number"] + '</p>';
document.getElementById('six').innerHTML = '<p>' + tile[5]["number"] + '</p>';
document.getElementById('seven').innerHTML = '<p>' + tile[6]["number"] + '</p>';
document.getElementById('eight').innerHTML = '<p>' + tile[7]["number"] + '</p>';
document.getElementById('nine').innerHTML = '<p>' + tile[8]["number"] + '</p>';
document.getElementById('ten').innerHTML = '<p>' + tile[9]["number"] + '</p>';
document.getElementById('eleven').innerHTML = '<p>' + tile[10]["number"] + '</p>';
document.getElementById('twelth').innerHTML = '<p>' + tile[11]["number"] + '</p>';
document.getElementById('thirdteen').innerHTML = '<p>' + tile[12]["number"] + '</p>';
document.getElementById('fourteen').innerHTML = '<p>' + tile[13]["number"] + '</p>';
document.getElementById('fifteen').innerHTML = '<p>' + tile[14]["number"] + '</p>';
document.getElementById('sixteen').innerHTML = '<p>' + tile[15]["number"] + '</p>';
document.getElementById('seventeen').innerHTML = '<p>' + tile[16]["number"] + '</p>';
document.getElementById('eightteen').innerHTML = '<p>' + tile[17]["number"] + '</p>';
document.getElementById('nineteen').innerHTML = '<p>' + tile[18]["number"] + '</p>';

});