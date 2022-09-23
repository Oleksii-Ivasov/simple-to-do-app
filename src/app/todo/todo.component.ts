import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('starIcon') starIcon!: ElementRef;
  @Output() todoClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();
  @Output() favoriteClicked: EventEmitter<ElementRef> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onTodoClicked() {
    this.todoClicked.emit();
  }

  onEditClicked() {
    this.editClicked.emit();
  }

  onDeleteClicked() {
    this.deleteClicked.emit();
  }

  onFavoriteClicked() {
    this.favoriteClicked.emit(this.starIcon);
  }
}
