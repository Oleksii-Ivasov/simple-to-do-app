import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-favorite-todos',
  templateUrl: './favorite-todos.component.html',
  styleUrls: ['./favorite-todos.component.css'],
})
export class FavoriteTodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.todos = this.dataService.getTodos();
  }

  changeTodoState(todo: Todo) {
    todo.completed = !todo.completed;
  }
  editTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '700px',
      data: todo,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateTodo(index, result);
      }
    });
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.dataService.deleteTodo(index);
  }

  toggleFavoriteState(todo: Todo) {
    todo.favorite = !todo.favorite;
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
