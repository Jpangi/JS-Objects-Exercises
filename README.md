# JavaScript Object-Oriented Exercises
This project contains three JavaScript exercises designed to practice object creation, methods, nested loops, array methods (filter, map, forEach, reduce, some), and string methods (toLowerCase, includes, slice, join, charAt, toUpperCase). Each exercise involves building a small system to manage data, with starter code and tasks provided.

# Exercises

## Recipe Book Manager (recipeBook.js)

Build a system to manage recipes, with properties for name, ingredients, instructions, and difficulty.
Tasks include adding recipes, searching by ingredient, listing instructions, and filtering by difficulty.
Uses nested loops for processing instructions and ingredients, array methods for filtering, and string methods for formatting.


## Library Catalog System (libraryCatalog.js)

Create a system to manage books, with properties for title, author, genres, and details (pages, year).
Tasks include adding books, searching by genre, summarizing books, and creating a short catalog string.
Employs nested loops for genres, array methods for filtering/mapping, and string methods for name formatting.


## Task Manager System (taskManager.js)

Develop a to-do list manager, with tasks having description, tags, priority, and status (completed, date).
Tasks include adding tasks, filtering by tag, summarizing by priority, and generating a status report.
Uses nested loops for priority grouping, array methods for counting/listing, and string methods for truncation.



### How to Use

#### Setup:

Fork and clone this repository into your VS Code.

Each file contains starter code with a basic object and sample data.


#### Implement Tasks:

Follow the instructions in each file’s comments to implement the required methods.
Each method involves specific JavaScript features (objects, loops, array/string methods).
Test cases are provided to verify functionality.


#### Run Tests:

After implementing each method, run the test commands provided in the comments.
Example: console.log(recipeBook.searchByIngredient("eggs")); to test searching.


#### Challenge Extensions:

Each exercise includes a challenge to add an extra method, testing deeper understanding (e.g., generating a shopping list or marking tasks complete).



### Requirements

JavaScript environment (browser, Node.js, or online editor).
Basic understanding of JavaScript objects, arrays, loops, and functions.
No external libraries required; all code is vanilla JavaScript.

#### Tips

Debug by logging intermediate values (e.g., console.log) to check object properties or loop results.
Ensure proper validation in methods (e.g., checking input types).
Experiment with the challenge extensions to go beyond the core tasks.
If stuck, try breaking tasks into smaller steps or logging data to understand the flow.

Example Test Run
// In recipeBook.js
recipeBook.addRecipe("Pancakes", ["flour", "milk", "eggs"], ["Mix batter", "Cook on griddle"], "Easy");
console.log(recipeBook.searchByIngredient("eggs")); // ["Chocolate Cake", "Pancakes"]
recipeBook.listAllInstructions(); // Formatted recipe instructions

Happy coding!