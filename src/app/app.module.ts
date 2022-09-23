import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditTodoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';
import { RadiobuttonFilterPipe } from './shared/radiobutton-filter.pipe';
import { FavoriteTodosComponent } from './favorite-todos/favorite-todos.component';
import { FavoritesPipe } from './shared/favorites.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    EditTodoDialogComponent,
    RadiobuttonFilterPipe,
    FavoriteTodosComponent,
    FavoritesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
