import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tio } from '../models/tio';
import axios from "axios";


@Injectable({
  providedIn: 'root'
})

//https://api.deezer.com/playlist/908622995
//https://api.deezer.com/album/302127
//https://api.deezer.com/artist/27
export class PlayListService {

  tioURL = 'https://api.deezer.com/playlist/';
  usuariologeado = false;
  constructor() { }


  obtenerUsuarioLogeado(): boolean{
    return this.usuariologeado;
  }
  cambiarLogeo(valor:boolean): void {
    this.usuariologeado = valor;
  }

  async obtenerPlayList(){
    try{
      var response;
      response = await axios.get(this.tioURL);
      return response;
      
    }catch(e){
      return e.response;
    }
  }

  async login(tio: Tio){
    try{
      var response;
      response = await axios.post(this.tioURL+'login', tio);
      return response;
      
    }catch(e){
      return e.response;
    }
  }
  async registrar(tio: Tio){
    try{
      var response;
      response = await axios.post(this.tioURL+'nuevo', tio);
      return response;
      
    }catch(e){
      return e.response;
    }
  }

}
