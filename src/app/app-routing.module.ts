import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoTasksComponent } from './tasks/todo-tasks/todo-tasks.component';

import { TodoPlayListComponent } from './playlist/todo-playlist/todo-playlist.component';


const routes: Routes = [
  { path: '',  redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks' , component: TodoTasksComponent },
  { path: 'playlist' , component: TodoPlayListComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
