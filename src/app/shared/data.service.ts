import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  todos: Todo[] = [
    {
      text: 'Make a todo list',
      completed: true,
      favorite: false
    },
    {
      text: 'Send it to the mentor',
      completed: false,
      favorite: false
    },
    {
      text: 'Do the work on the mistakes',
      completed: false,
      favorite: false
    },
  ];

  constructor() {}

  getTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, todo: Todo) {
    this.todos[index] = todo;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
