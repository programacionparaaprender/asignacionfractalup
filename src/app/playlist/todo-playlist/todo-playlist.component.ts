import { Component, OnInit } from '@angular/core';

import axios from 'axios'


const api = "http://www.programandoconrupert.com/ws/servicio-gatos.php";
@Component({
  selector: 'app-todo-playlist',
  templateUrl: './todo-playlist.component.html',
  styleUrls: ['./todo-playlist.component.css']
})
export class TodoPlayListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // Disparamos la acción

  public async addTask() : Promise<void> {
    try{
      let response = await fetch(api);
      let data = await response.json()
      alert(JSON.stringify(data));
      
    }catch(error){
      alert(error);
    }
  }
}
