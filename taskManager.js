
// Initial object structure
const taskManager = {
  tasks: [],  // Array to store task objects
  // Methods will be added here
};

// Sample tasks for testing
taskManager.tasks.push({
  description: "Finish project",
  tags: ["work", "urgent"],
  priority: 1,
  status: { completed: false, date: "2025-07-29" }
});

taskManager.tasks.push({
  description: "Buy groceries",
  tags: ["personal", "shopping"],
  priority: 2,
  status: { completed: true, date: "2025-07-28" }
});

// Instructions/Tasks:
// Build a Task Manager System to manage to-do tasks. Each task is an object with description (string), tags (array of strings), priority (number: 1=high, 2=medium, 3=low), and status (object with completed boolean and date string).
// Implement the following methods:

// 1. addTask(description, tags, priority, date)
//    - Takes description (string), tags (array), priority (number), and date (string).
//    - Validates: description is a non-empty string, tags is an array, priority is 1, 2, or 3.
//    - Creates a task object with status.completed = false and adds it to tasks array.
//    - Logs confirmation (e.g., "Task 'Call client' added.").
//    - Test: taskManager.addTask("Call client", ["work", "urgent"], 1, "2025-07-30");

// 2. findByTag(tag)
//    - Takes a tag (string) and returns an array of task descriptions matching it (case-insensitive).
//    - Use 'filter' on tasks and 'some' on tags array.
//    - Use string methods 'toLowerCase' and 'includes' for matching.
//    - Test: console.log(taskManager.findByTag("urgent")); // Should return ["Finish project", "Call client"]

// 3. summarizeByPriority()
//    - Groups tasks by priority (1, 2, 3) using an outer loop over priority levels.
//    - Inner loop filters and lists tasks per priority.
//    - Truncates descriptions longer than 20 chars (use 'slice') and shows status (e.g., "1. Finish project... (Pending)").
//    - Use 'filter' and 'forEach' with a 'for' loop over priorities.
//    - Test: taskManager.summarizeByPriority();

// 4. getTaskReport()
//    - Returns a string summarizing task status (e.g., "2 tasks pending, 1 task completed: Finish project, Buy groceries, ...").
//    - Use 'reduce' to count completed/pending and 'map' with 'join' to list descriptions.
//    - Test: console.log(taskManager.getTaskReport());

// Challenge Extension:
// - Add a method markTaskComplete(description) that finds a task by description (case-insensitive), sets status.completed to true, and updates the date.
// - Test: taskManager.markTaskComplete("finish project"); console.log(taskManager.getTaskReport());

// Run tests in a browser console, Node.js, or JSFiddle to verify functionality.