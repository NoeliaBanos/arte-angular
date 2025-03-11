import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL="https://api.artic.edu/api/v1/artworks";

@Injectable({
  providedIn: 'root'
})
export class ArtworksService {
  trim() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpclient:HttpClient ) { }

 // Obtener todas las obras de arte
 getArtworks(page: number) {
  return this.httpclient.get<any>(BASE_URL);
}
// Buscar obras de arte
searchArtworks(query: string, searchType: string){
  let url = `${BASE_URL}/search?q=${query}`;
  return this.httpclient.get<any>(url);
}
// Buscar obras de arte
getArtworkById(id: number) {
  let url = `${BASE_URL}/search?q=${id}`;
  return this.httpclient.get<any>(url);
}

  // obtenerArticulos(){
  //   return this.httpclient.get<any>(BASE_URL);
  // }
}
