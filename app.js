//add ingredient
document.getElementById("add-ingredient").addEventListener("click", function () {
  const ingredientList = document.getElementById("ingredient-list");
  const newIngredientItem = document.createElement("div");
  newIngredientItem.innerHTML = `
      <input type="text" class="ingredient" required>
      <button type="button" class="negative">-</button>
  `;
  ingredientList.appendChild(newIngredientItem);
});

// remove ingredient
document.getElementById("recipe-form").addEventListener("click", function (e) {
  if (e.target.classList.contains("negative")) {
    e.target.parentElement.remove();
  }
});

// add direction
document.getElementById("add-direction").addEventListener("click", function () {
  const directionList = document.getElementById("direction-list");
  const newDirectionItem = document.createElement("div");
  newDirectionItem.innerHTML = `
      <input type="text" class="direction" required>
      <button type="button" class="negative">-</button>
  `;
  directionList.appendChild(newDirectionItem);
});

// remove direction
document.getElementById("recipe-form").addEventListener("click", function (e) {
  if (e.target.classList.contains("negative")) {
    e.target.parentElement.remove();
  }
});

document.getElementById("recipe-form").addEventListener("submit", function (e) {
  e.preventDefault();

  if (localStorage.getItem("recipeList") != null) {
    recipeList = JSON.parse(localStorage.getItem("recipeList"));
  }

  let recipe = {
    recipeName: "",
    pictureImage: "",
    ingredients: [],
    directions: [],
  };

  //query selectors for form elements
  const recipeName = document.getElementById("recipe-name").value;
  const pictureImage = document.getElementById("picture-image").value;
  const ingredients = Array.from(document.querySelectorAll(".ingredient")).map((input) => input.value);
  const directions = Array.from(document.querySelectorAll(".direction")).map((input) => input.value);

  //populating the recipe dictionary and adding it to the recipeList array
  recipe.recipeName = recipeName;
  recipe.pictureImage = pictureImage;
  recipe.ingredients = ingredients;
  recipe.directions = directions;

  // resets the forms
  document.getElementById("recipe-name").value = "";
  document.getElementById("picture-image").value = "";
  document.querySelectorAll(".ingredient").forEach((input) => (input.value = ""));
  document.querySelectorAll(".direction").forEach((input) => (input.value = ""));

  JSONArray = JSON.stringify(recipe);
  localStorage.setItem("recipe", JSONArray);

  console.log(localStorage.getItem("recipe"));

  window.location.href = "view-recipe.html";
});
//committence
