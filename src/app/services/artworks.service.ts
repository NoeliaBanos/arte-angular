import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iartwork } from '../interfaces/iartwork';
import { Observable } from 'rxjs';

const BASE_URL="https://api.artic.edu/api/v1/artworks";

@Injectable({
  providedIn: 'root'
})
export class ArtworksService {
  trim() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpclient:HttpClient ) { }

  // Obtener todas las obras de arte con paginación
  getArtworks(page: number = 1): Observable<Iartwork[]> {
    const url = `${BASE_URL}?page=${page}&limit=10`;
    return new Observable(observer => {
      this.httpclient.get<any>(url).subscribe(response => {
        let artworks: Iartwork[] = [];
        response.data.forEach((item: any) => {
          const artwork: Iartwork = {
            id: item.id,
            title: item.title,
            artist_display: item.artist_display || null,
            date_display: item.date_display || null,
            main_reference_number: item.main_reference_number || null,
            artist_id: item.artist_id || 0,
            classification_titles: item.classification_titles || [],
            style_ids: item.style_ids || [],
            image_id: item.image_id || '',
            imageUrl: item.imageUrl || '',
            is_public_domain: item.is_public_domain || false,
          };
          artworks.push(artwork);
        });
        observer.next(artworks);
        observer.complete();
      });
    });
  }

  // Buscar obras de arte por título o artista
  searchArtworks(query: string, searchType: string): Observable<Iartwork[]> {
    const url = `${BASE_URL}/search?q=${query}&fields=id,title,artist_display,date_display,image_id`;
    return new Observable(observer => {
      this.httpclient.get<any>(url).subscribe(response => {
        let artworks: Iartwork[] = [];
        response.data.forEach((item: any) => {
          const artwork: Iartwork = {
            id: item.id,
            title: item.title,
            artist_display: item.artist_display || null,
            date_display: item.date_display || null,
            image_id: item.image_id || '',
            imageUrl: item.image_id ? `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg` : '',
            main_reference_number: null,
            artist_id: 0,
            classification_titles: [],
            style_ids: [],
            is_public_domain: false
          };
          artworks.push(artwork);
        });
        observer.next(artworks);
        observer.complete();
      });
    });

  }
  // Obtener una obra de arte por ID
  getArtworkById(id: number): Observable<Iartwork> {
    const url = `${BASE_URL}/${id}`;
    return new Observable(observer => {
      this.httpclient.get<any>(url).subscribe(response => {
        const item = response.data;
        const artwork: Iartwork = {
          id: item.id,
          title: item.title,
          artist_display: item.artist_display || null,
          date_display: item.date_display || null,
          main_reference_number: item.main_reference_number || null,
          artist_id: item.artist_id || 0,
          classification_titles: item.classification_titles || [],
          style_ids: item.style_ids || [],
          image_id: item.image_id || '',
          imageUrl: item.imageUrl || '',
          is_public_domain: item.is_public_domain || false,
        };
        observer.next(artwork);
        observer.complete();
      });
    });
  }
}

export type { Iartwork };
