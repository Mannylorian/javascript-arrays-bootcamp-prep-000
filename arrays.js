var grilledCheeseIngredients=['bread','mild cheese','sharp cheese','butter','tomato','garlic'];


var tomatoSauceIngredients=['tomato','garlic','olive oil','basil','oregano' ];

var chocolateBars=['snickers','hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(){
  var citiesInThuringia=['Weimar','Jena','Erfurt']
  citiesInThuringia.push('Gotha');
}
addElementToBeginningOfArray();  



function destructivelyAddElementToBeginningOfArray(){
  var typesOfWurst=['Ahle Wurst','Thuringer','Naumberger',];
  [...typesOfWurst,'Weisswurst'];
}
destructivelyAddElementToBeginningOfArray();


