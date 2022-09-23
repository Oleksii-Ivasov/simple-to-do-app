import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteTodosComponent } from './favorite-todos/favorite-todos.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path: '', component: TodosComponent},
  {path:'favorite', component: FavoriteTodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
