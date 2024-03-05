function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Chicken salad 300g chicken 2 tomatoes 2 cups cos lettuce",
    autoStart: true,
    delay: 50,
  });
}

let ingredientElement = document.querySelector("#ingredient");
ingredientElement.addEventListener("submit", generateRecipe);
