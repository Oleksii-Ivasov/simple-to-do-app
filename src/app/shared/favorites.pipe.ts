import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo.model';

@Pipe({
  name: 'favorites',
})
export class FavoritesPipe implements PipeTransform {
  transform(todosArray: Todo[]) {
    if (!todosArray) {
      return null;
    }
    let todos: Todo[] = [];
    for (let todo of todosArray) {
      if (todo.favorite) {
        todos.push(todo);
      }
    }
    return todos;
  }
}
