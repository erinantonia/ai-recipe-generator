function displayRecipe(response) {
  new Typewriter(".recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
  });

  console.log(response);
}

function generateRecipe(event) {
  event.preventDefault();

  let ingredientInput = document.querySelector("#ingredient-input");
  let recipeTitle = document.querySelector("#recipe-title");
  let recipeIngredients = document.querySelector("#recipe-ingredients");

  let apiKey = "36314taf33204213d293afod0a3b00b2";
  let prompt = `Please write a short recipe based on the ingredients provided in ${ingredientInput.value}. Please provide a short title to describe the recipe and display it in the <div> ${recipeTitle}, followed by a list of ingredients displayed in the <div> ${recipeIngredients}. Include a maximum of 10 ingredients. After the ingredients, write the directions of the recipe in a clear and concise manner with each step on a new line seperated by a </br>`;
  let context =
    "You are a professional recipe creator and experienced chef. You prioritise nutritious, high protein recipes that make use of everyday ingredients and plenty of fresh fruits and vegetables";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector(".recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `Generating a recipe that includes ${ingredientInput.value} ⏲️`;

  axios.get(apiUrl).then(displayRecipe);
  console.log("generating recipe");
}

let ingredientElement = document.querySelector("#ingredient-form");
ingredientElement.addEventListener("submit", generateRecipe);
