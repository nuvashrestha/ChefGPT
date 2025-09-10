let ingredient = document.querySelector("#ingredients");
let cuisineType = document.querySelector('#cuisine');
let dietaryRestrictions = document.querySelector('#dietary');
let generateButton = document.querySelector('#generate-button');
let recipeContainer = document.querySelector('#recipeContainer');

generateButton.addEventListener("click", () => {
    console.log(ingredient.value);
    console.log(cuisineType.value);
    console.log(dietaryRestrictions.value);

    // create card for generated recipe per figma design
    if (ingredient.value) {
        recipeContainer.style.backgroundColor = '#F5F5F5';
        recipeContainer.style.padding = '20px';
        recipeContainer.style.borderRadius = '10px';
        recipeContainer.style.width = '500px';
        recipeContainer.style.height = '600px';
    }
}); 