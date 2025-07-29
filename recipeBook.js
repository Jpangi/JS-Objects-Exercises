
// Initial object structure
const recipeBook = {
  recipes: [],  // Array to store recipe objects
  // Methods will be added here
};

// Sample recipes for testing
recipeBook.recipes.push({
  name: "Chocolate Cake",
  ingredients: ["flour", "sugar", "cocoa", "eggs", "butter"],
  instructions: ["Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients and stir", "Bake for 30 minutes"],
  difficulty: "Medium"
});

recipeBook.recipes.push({
  name: "Vegetable Stir-Fry",
  ingredients: ["broccoli", "carrots", "soy sauce", "garlic", "oil"],
  instructions: ["Heat oil in pan", "Add vegetables and stir", "Add soy sauce and garlic", "Cook for 10 minutes"],
  difficulty: "Easy"
});

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

// Challenge Extension:
// - Add a method generateShoppingList(recipeNames) that takes an array of recipe names, collects all unique ingredients using a nested loop and Set, and returns them as a comma-separated string (use 'join').
// - Test: console.log(recipeBook.generateShoppingList(["Chocolate Cake", "Pancakes"]));

// Run tests in a browser console, Node.js, or JSFiddle to verify functionality.