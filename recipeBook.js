
// Initial object structure
const recipeBook = {
  recipes: [],  // Array to store recipe objects
  addRecipe: function(name, ingredients, instructions, difficulty){
    if(typeof name !== 'string' || name.trim() === ''){
      console.log('Enter valid recipe name');
      return;
    }
    if(!Array.isArray(ingredients) || !Array.isArray(instructions)){
      console.log('ingredients and instructions should be arrays');
      return;
    }
    const newRecipe = {
      name: name,
      ingredients: ingredients,
      instructions: instructions,
      difficulty: difficulty
    };
    this.recipes.push(newRecipe);
    console.log(newRecipe);
  },

searchByIngredient: (ingredient) => {
    const ingredientLower = ingredient.toLowerCase();
    const matchingRecipes = recipeBook.recipes.filter(recipe =>
      recipe.ingredients.some(item =>
        item.toLowerCase().includes(ingredientLower)
      )
    );
    const recipeNames = matchingRecipes.map(recipe => recipe.name);
    return recipeNames;
  },

listAllInstructions: function() {
  const index = 0;
  for (let i = 0; i < recipeBook.recipes.length; i++) {
    console.log(`Recipe ${i+1}: ${recipeBook.recipes[i].name}\n`);
    const instructions = recipeBook.recipes[i].instructions;
    for (let j = 0; j < instructions.length; j++) {
      let upper = instructions[j].charAt(index).toUpperCase();
      let newInstructions = upper + instructions[j].slice(1)
      console.log(`${j + 1}: ${newInstructions}.\n`);
    }
  }
},

getRecipesByDifficulty: function(difficulty){



}

}






// Sample recipes for testing
recipeBook.recipes.push({
  name: "Chocolate Cake",
  ingredients: ["flour", "sugar", "cocoa", "eggs", "butter"],
  instructions: ["preheat oven to 350°F", "mix dry ingredients", "Add wet ingredients and stir", "Bake for 30 minutes"],
  difficulty: "Medium"
});

recipeBook.recipes.push({
  name: "Vegetable Stir-Fry",
  ingredients: ["broccoli", "carrots", "soy sauce", "garlic", "oil"],
  instructions: ["Heat oil in pan", "Add vegetables and stir", "Add soy sauce and garlic", "Cook for 10 minutes"],
  difficulty: "Easy"
});

recipeBook.addRecipe("Pancakes", ["flour", "milk", "eggs"], ["Mix batter", "Cook on griddle"], "Easy");
recipeBook.listAllInstructions();

// Instructions/Tasks:
// Build a Recipe Book Manager to store and manage recipes. Each recipe is an object with name (string), ingredients (array of strings), instructions (array of strings), and difficulty (string: "Easy", "Medium", "Hard").
// Implement the following methods:

// 1. addRecipe(name, ingredients, instructions, difficulty)
//    - Takes name (string), ingredients (array), instructions (array), and difficulty (string).
//    - Validates: name is a non-empty string, ingredients and instructions are arrays.
//    - Creates a recipe object and adds it to recipes array.
//    - Logs confirmation (e.g., "Pancakes added to the recipe book!").
//    - Test: recipeBook.addRecipe("Pancakes", ["flour", "milk", "eggs"], ["Mix batter", "Cook on griddle"], "Easy");



// 2. searchByIngredient(ingredient)
//    - Takes an ingredient (string) and returns an array of recipe names that include it (case-insensitive).
//    - Use array method 'filter' on recipes and 'some' on ingredients array.
//    - Use string methods 'toLowerCase' and 'includes' for matching.
//    - Test: console.log(recipeBook.searchByIngredient("eggs")); // Should return ["Chocolate Cake", "Pancakes"]




// console.log(recipeBook.recipes[0].ingredients);



// 3. listAllInstructions()
//    - Loops through all recipes (outer loop) and their instructions (inner loop).
//    - Formats each instruction: capitalize first letter (use 'charAt', 'toUpperCase', 'slice') and add period if missing.
//    - Logs a numbered list per recipe (e.g., "Recipe 1: Chocolate Cake\n1. Preheat oven to 350°F.\n...").
//    - Use 'forEach' for recipes and a 'for' loop for instructions.
//    - Test: recipeBook.listAllInstructions();





// 4. getRecipesByDifficulty(difficulty)
//    - Takes a difficulty string (e.g., "Easy") and returns an array of matching recipe objects.
//    - Enhances each recipe with 'totalSteps' (instructions.length) and 'totalIngredients' (count via nested loop).
//    - Includes a 'summary' property (e.g., "This Easy recipe has 5 ingredients.").
//    - Use 'filter' to find matches, 'map' to enhance, and a nested 'for' loop to count ingredients.
//    - Test: console.log(recipeBook.getRecipesByDifficulty("Easy"));









// Challenge Problems:
// 5. sortRecipes()
//    - Returns an object with keys "Easy", "Medium", "Hard", each containing an array of recipe names sorted by ingredient count (ascending).
//    - Use 'reduce' to group by difficulty and 'sort' with a comparator for ingredient count.
//    - Count ingredients with a loop for each recipe.
//    - Test: console.log(recipeBook.sortRecipes()); // E.g., { Easy: ["Pancakes", "Vegetable Stir-Fry"], Medium: ["Chocolate Cake"], Hard: [] }

// 6. deleteRecipe(name)
//    - Takes a recipe name (string) and removes it from the recipes array (case-insensitive).
//    - Use 'findIndex' with 'toLowerCase' to locate, then 'splice' to remove.
//    - Logs "Recipe deleted" or "Recipe not found".
//    - Test: recipeBook.deleteRecipe("chocolate cake"); console.log(recipeBook.recipes);

// 7. averageStepsByDifficulty()
//    - Returns an object with average instructions (steps) per difficulty level (e.g., { Easy: 4.5, Medium: 4, Hard: 0 }).
//    - Use 'reduce' to group by difficulty, count recipes, and sum instructions.length.
//    - Handle empty categories with zero averages.
//    - Test: console.log(recipeBook.averageStepsByDifficulty());

// 8. generateShoppingList(recipeNames)
//    - Takes an array of recipe names, collects all unique ingredients using a nested loop and Set, and returns them as a comma-separated string (use 'join').
//    - Test: console.log(recipeBook.generateShoppingList(["Chocolate Cake", "Pancakes"]));

// Run tests in a browser console, Node.js, or JSFiddle to verify functionality.