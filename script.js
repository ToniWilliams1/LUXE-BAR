document.querySelector("button").addEventListener("click", getDrink);
let drinkArray = [];
let name = document.querySelector(".name");
let type = document.querySelector(".type");
let img = document.querySelector("img");
let instrucs = document.querySelector(".p");
let ingreds = document.querySelector(".ingredients");
let ingred2 = document.querySelector(".ingredient2");
let ingred3 = document.querySelector(".ingredient3");
let ingred4 = document.querySelector(".ingredient4");
let ingred5 = document.querySelector(".ingredient5");
let measure = document.querySelector(".measurement2");
let counter = 0;

function getDrink() {
  let drink = document.querySelector("input").value;

  fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      drinkArray = [];
      for (let i = 0; i < data.drinks.length; i++) {
        drinkArray.push(data.drinks[i]);
      }
      console.log(drinkArray, drinkArray[0].strDrink);

      name.innerText = drinkArray[0].strDrink;
      type.innerText = drinkArray[0].strAlcoholic;
      img.src = drinkArray[0].strDrinkThumb;
      instrucs.innerText = drinkArray[0].strInstructions;
      ingreds.innerText = drinkArray[0].strIngredient1;
      ingred2.innerText = drinkArray[0].strIngredient2;
      ingred3.innerText = drinkArray[0].strIngredient3;
      ingred4.innerText = drinkArray[0].strIngredient4;
      ingred5.innerText = drinkArray[0].strIngredient5;
      measure.innerText = drinkArray[0].strMeasure1;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

document.querySelector(".next-button").addEventListener("click", () => {
  counter++; //At the start of the click event we will increase the counter by 1
  name.innerText = "";
  type.innerText = "";
  img.src = "";
  instrucs.innerText = "";
  ingreds.innerText = "";
  ingred2.innerText = "";
  ingred3.innerText = "";
  ingred4.innerText = "";
  ingred5.innerText = "";
  measure.innerText = "";

  if (counter > drinkArray.length - 1) {
    //This will check if the counter has increased to be greater than the last element in the array
    counter = 0; //If the counter is greater than the last element in the array, set the counter back to zero, and make all the drink information equal to the information from the first element in the array
    name.innerText = drinkArray[counter].strDrink;
    type.innerText = drinkArray[counter].strAlcoholic;
    img.src = drinkArray[counter].strDrinkThumb;
    instrucs.innerText = drinkArray[counter].strInstructions;
    ingreds.innerText = drinkArray[counter].strIngredient1;
    ingred2.innerText = drinkArray[counter].strIngredient2;
    ingred3.innerText = drinkArray[counter].strIngredient3;
    ingred4.innerText = drinkArray[counter].strIngredient4;
    ingred5.innerText = drinkArray[counter].strIngredient5;
    measure.innerText = drinkArray[counter].strMeasure1;
  } else {
    //If the counter is not greater than the last element in the array, the drink info will the whatever the next element is
    name.innerText = drinkArray[counter].strDrink;
    type.innerText = drinkArray[counter].strAlcoholic;
    img.src = drinkArray[counter].strDrinkThumb;
    instrucs.innerText = drinkArray[counter].strInstructions;
    ingreds.innerText = drinkArray[counter].strIngredient1;
    ingred2.innerText = drinkArray[counter].strIngredient2;
    ingred3.innerText = drinkArray[counter].strIngredient3;
    ingred4.innerText = drinkArray[counter].strIngredient4;
    ingred5.innerText = drinkArray[counter].strIngredient5;
    measure.innerText = drinkArray[counter].strMeasure1;
  }
});
document.querySelector(".prev-button").addEventListener("click", () => {
  counter--; //At the start of the click event, decrement the counter by 1
  name.innerText = "";
  type.innerText = "";
  img.src = "";
  instrucs.innerText = "";
  ingreds.innerText = "";
  ingred2.innerText = "";
  ingred3.innerText = "";
  ingred4.innerText = "";
  ingred5.innerText = "";
  measure.innerText = "";

  if (counter < 0) {
    //If the counter has been decremented below passed 0 (the start of the array), we will set the counter equal to the last element of the array
    counter = drinkArray.length - 1;
    name.innerText = drinkArray[counter].strDrink;
    type.innerText = drinkArray[counter].strAlcoholic;
    img.src = drinkArray[counter].strDrinkThumb;
    instrucs.innerText = drinkArray[counter].strInstructions;
    ingreds.innerText = drinkArray[counter].strIngredient1;
    ingred2.innerText = drinkArray[counter].strIngredient2;
    ingred3.innerText = drinkArray[counter].strIngredient3;
    ingred4.innerText = drinkArray[counter].strIngredient4;
    ingred5.innerText = drinkArray[counter].strIngredient5;
    measure.innerText = drinkArray[counter].strMeasure1;
  } else {
    //If the counter is not less than 0, we will just find what the next element is and put its data into the DOM
    name.innerText = drinkArray[counter].strDrink;
    type.innerText = drinkArray[counter].strAlcoholic;
    img.src = drinkArray[counter].strDrinkThumb;
    instrucs.innerText = drinkArray[counter].strInstructions;
    ingreds.innerText = drinkArray[counter].strIngredient1;
    ingred2.innerText = drinkArray[counter].strIngredient2;
    ingred3.innerText = drinkArray[counter].strIngredient3;
    ingred4.innerText = drinkArray[counter].strIngredient4;
    ingred5.innerText = drinkArray[counter].strIngredient5;
    measure.innerText = drinkArray[counter].strMeasure1;
  }
});

document.querySelector(".random-button").addEventListener("click", () => {
 Math.floor(Math.random() * drinkArray.length)
   name.innerText = drinkArray[counter].strDrink;
    type.innerText = drinkArray[counter].strAlcoholic;
    img.src = drinkArray[counter].strDrinkThumb;
    instrucs.innerText = drinkArray[counter].strInstructions;
    ingreds.innerText = drinkArray[counter].strIngredient1;
    ingred2.innerText = drinkArray[counter].strIngredient2;
    ingred3.innerText = drinkArray[counter].strIngredient3;
    ingred4.innerText = drinkArray[counter].strIngredient4;
    ingred5.innerText = drinkArray[counter].strIngredient5;
    measure.innerText = drinkArray[counter].strMeasure1;
})


