import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  completedFilter: boolean = false;
  activeFilter: boolean = false;
  allFilter: boolean = false;
  favoriteFilter: boolean = false;

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.todos = this.dataService.getTodos();
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return;
    this.dataService.addTodo({
      text: form.value.todoText,
      completed: false,
      favorite: false,
    });
    form.reset();
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
  }

  onRadioButtonChange(value: string) {
    this.completedFilter = false;
    this.activeFilter = false;
    this.allFilter = false;
    this.favoriteFilter = false;
    if (value === 'favorite') {
      this.favoriteFilter = !this.favoriteFilter;
    } else if (value === 'completed') {
      this.completedFilter = !this.completedFilter;
    } else if (value === 'active') {
      this.activeFilter = !this.activeFilter;
    } else if (value === 'all') {
      this.allFilter = !this.allFilter;
    }
  }
}
