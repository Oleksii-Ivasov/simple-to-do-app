import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo.model';

@Pipe({
  name: 'radiobuttonFilter',
})
export class RadiobuttonFilterPipe implements PipeTransform {
  transform(
    todosArray: Todo[],
    filter1: boolean,
    filter2: boolean,
    filter3: boolean,
    filter4: boolean
  ) {
    if (!todosArray) {
      return null;
    }

    if (!filter1 && !filter2 && !filter3 && !filter4) {
      return todosArray;
    }

    let todos: Todo[] = [];
    for (let todo of todosArray) {
      if (filter1) {
        if (todo.completed) {
          todos.push(todo);
        }
      } else if (filter2) {
        if (!todo.completed) {
          todos.push(todo);
        }
      } else if (filter3) {
        todos.push(todo);
      } else if (filter4) {
        if (todo.favorite) {
          todos.push(todo);
        }
      }
    }
    return todos;
  }
}
