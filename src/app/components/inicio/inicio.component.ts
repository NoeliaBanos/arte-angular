import { Component } from '@angular/core';
import { ArtworksService } from '../../services/artworks.service';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  obras: any[] = [];
  pagination: any = {};

  searchQuery: string = '';
  searchType: string = 'title';

  constructor(private artworksService: ArtworksService) {}

  // onSearch() {
  //   const query = this.searchQuery ? this.searchQuery : '';
  //   this.artworksService.searchArtworks(query, this.searchType).subscribe((response: any) => {
  //     this.obras = response.data;
  //     this.pagination = response.pagination;
  //     console.log(this.obras);
  //   });
  // }
 
  onSearch() {
    const query = this.searchQuery ? this.searchQuery : '';
    this.artworksService.searchArtworks(query, this.searchType).subscribe((response: any) => {
      // console.log(response); // Verifica la estructura de la respuesta
  
      // Extrae el iiif_url de la configuración
      const iiifUrl = response.config?.iiif_url || 'https://www.artic.edu/iiif/2';
  
      // Procesa las obras
      this.obras = response.data.map((obra: any) => {
        // console.log(obra); // Verifica la estructura de cada obra
  
        // Construye la URL de la imagen usando iiifUrl y image_id
        obra.imagen_URL = obra.image_id ? `${iiifUrl}/${obra.image_id}/full/843,/0/default.jpg` : 'assets/no-image.jpg';
        return obra;
      });
  
      this.pagination = response.pagination;
    }, (error) => {
      console.error('Error fetching artworks:', error);
    });
  }
  

  onPageChange(page: number) {
    if (page > 0 && page <= this.pagination.total_pages) {
      this.artworksService.getArtworks(page).subscribe((response: any) => {
        this.obras = response.data.map((obra: any) => {
          obra.imagen_URL = obra.image_id ? `https://www.artic.edu/iiif/2/${obra.image_id}/full/843,/0/default.jpg` : '';
          return obra;
        });
        this.pagination = response.pagination;
      }, (error) => {
        console.error('Error fetching artworks:', error);
      });
    }
  }
}