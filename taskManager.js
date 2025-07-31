
// Initial object structure
const taskManager = {
  tasks: [],  // Array to store task objects
  // Methods will be added here





// 1. addTask(description, tags, priority, date)
//    - Takes description (string), tags (array), priority (number), and date (string).
//    - Validates: description is a non-empty string, tags is an array, priority is 1, 2, or 3.
//    - Creates a task object with status.completed = false and adds it to tasks array.
//    - Logs confirmation (e.g., "Task 'Call client' added.").
//    - Test: taskManager.addTask("Call client", ["work", "urgent"], 1, "2025-07-30");

  addTask: function(description, tags, priority, date){
    if(typeof description !== 'string' || description.trim() === ""){
      console.log('empty string');
    }
    if(Array.isArray(tags) === false){
      console.log('empty tag array');
    }
    if(this.tasks.priority > 3 || this.tasks.priority < 0){
      console.log('priority is not 1, 2 or 3');
    }

    this.tasks.push({
      description: description,
      tags: tags,
      priority: priority,
      status:{completed: false, date: date}
    })
    console.log(`Task ${description} added`);

  },

// 2. findByTag(tag)
//    - Takes a tag (string) and returns an array of task descriptions matching it (case-insensitive).
//    - Use 'filter' on tasks and 'some' on tags array.
//    - Use string methods 'toLowerCase' and 'includes' for matching.
//    - Test: console.log(taskManager.findByTag("urgent")); // Should return ["Finish project", "Call client"]

findByTag: function(tag){
  const lowerTags= tag.toLowerCase()
  const matchingTags = this.tasks.filter(tag => {tag.toLowerCase() === lowerTags
})
}













    

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
taskManager.addTask("Call client", ["work", "urgent"], 1, "2025-07-30");
console.log(taskManager.tasks);
// Instructions/Tasks:
// Build a Task Manager System to manage to-do tasks. Each task is an object with description (string), tags (array of strings), priority (number: 1=high, 2=medium, 3=low), and status (object with completed boolean and date string).
// Implement the following methods:




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

// Challenge Problems:
// 5. getSortedPendingTasks()
//    - Returns an array of pending task descriptions, sorted by due date (ascending) then priority (high to low).
//    - Use 'filter' for pending tasks, 'sort' with comparators on status.date (parse with new Date()) and priority.
//    - Test: console.log(taskManager.getSortedPendingTasks()); // E.g., ["Call client", "Finish project"]

// 6. tagStats()
//    - Returns an object counting tag usage by completed/pending (e.g., { work: { completed: 0, pending: 2 }, urgent: { completed: 1, pending: 1 } }).
//    - Use nested loops (outer over tasks, inner over tags) with 'reduce' to tally counts.
//    - Test: console.log(taskManager.tagStats());

// 7. bulkMarkComplete(tag)
//    - Marks all tasks with a given tag (case-insensitive) as completed, updating status.date to current date (use new Date().toISOString().split('T')[0]).
//    - Logs number of tasks updated.
//    - Test: taskManager.bulkMarkComplete("urgent"); console.log(taskManager.getTaskReport());

// Original Challenge Extension:
// 8. markTaskComplete(description)
//    - Finds a task by description (case-insensitive), sets status.completed to true, and updates date.
//    - Test: taskManager.markTaskComplete("finish project"); console.log(taskManager.getTaskReport());

// Run tests in a browser console, Node.js, or JSFiddle to verify functionality.