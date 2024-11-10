// Define an interface for a Task
interface Task {
    id: number;
    title: string;
    completed: boolean;
  }
  
  // Create a class to manage tasks
  class TaskManager {
    private tasks: Task[] = [];
  
    // Method to add a task
    addTask(title: string): void {
      const newTask: Task = {
        id: this.tasks.length + 1,
        title: title,
        completed: false,
      };
      this.tasks.push(newTask);
      console.log(`Task "${title}" added!`);
    }
  
    // Method to mark a task as completed
    completeTask(id: number): void {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.completed = true;
        console.log(`Task "${task.title}" marked as completed!`);
      } else {
        console.log(`Task with ID ${id} not found.`);
      }
    }
  
    // Method to list all tasks
    listTasks(): void {
      console.log("Task List:");
      this.tasks.forEach(task => {
        console.log(`[${task.completed ? "✔" : " "}] ${task.id}: ${task.title}`);
      });
    }
  }
  
  // Example usage
  const manager = new TaskManager();
  manager.addTask("Learn TypeScript");
  manager.addTask("Build a portfolio project");
  manager.completeTask(1);
  manager.listTasks();
  