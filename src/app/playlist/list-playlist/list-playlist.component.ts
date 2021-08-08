import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Task } from './../../tasks/task.model';
import { AppState } from './../../app.state';

@Component({
  selector: 'app-list-playlist',
  templateUrl: './list-playlist.component.html',
  styleUrls: ['./list-playlist.component.css']
})
export class PlayListComponent implements OnInit {

  // Definimos el observable:
  tasks: Observable<Task[]>;
  constructor(
    private store: Store<AppState>
  ) { 
    // Accedemos a la store:
    this.tasks = this.store.select('tasks');
  }

  ngOnInit() {
  }

}
