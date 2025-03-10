import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL="https://ejerciciostutorialesya.com/vue/datos.php";

@Injectable({
  providedIn: 'root'
})
export class ArtworksService {

  constructor(private httpclient:HttpClient ) { }

  obtenerArticulos(){
    return this.httpclient.get<any>(BASE_URL);
  }
}
