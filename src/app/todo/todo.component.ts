import { Component } from '@angular/core';
import { Todo } from "../todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  notCompleted: boolean = true;
  taskName: string;
  todos: Todo[] = [
    {
      task: "Wash car",
      completed: false
    },
    {
      task: "Walk dog",
      completed: false
    },
    {
      task: "Vacuum",
      completed: true
    },
    {
      task: "Do dishes",
      completed: true
    }
  ];
  constructor() {}
  toggleComplete(index): void {
    this.todos[index].completed = true;
  }
  deleteTask(index): void {
    this.todos.splice(index, 1);
  }
  addTask(form): void {
    this.todos.push({
      task: form.value.taskName,
      completed: false
    })
  }
}
