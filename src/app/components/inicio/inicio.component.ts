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
    // Si hay una búsqueda, la usamos, sino, pasamos una cadena vacía.
    const query = this.searchQuery ? this.searchQuery : '';
    
    // Usamos el servicio para buscar obras con la consulta y el tipo de búsqueda (si se aplica)
    this.artworksService.searchArtworks(query, this.searchType).subscribe((response: any) => {
      // Inicializamos el arreglo de obras vacío
      this.obras = [];
  
      // Recorremos las obras obtenidas con `forEach`
      response.data.forEach((obra: any) => {
        // Agregamos la URL de la imagen a cada obra usando `imagen_URL`
        obra.imagen_URL = obra.image_id ? `https://www.artic.edu/iiif/2/${obra.image_id}/full/843,/0/default.jpg` : '';
        // Agregamos la obra al arreglo
        this.obras.push(obra);
      });
  
      // Asignamos la paginación si está presente en la respuesta
      this.pagination = response.pagination;
  
      console.log(this.obras); // Verificar los datos
    }, (error) => {
      console.error('Error fetching artworks:', error);
    });
  }
  

  onPageChange(page: number) {
    this.artworksService.getArtworks(1).subscribe(
      (data) => {
        this.obras = data; // Asigna los datos al arreglo de obras
        console.log(this.obras); // Para depurar y ver los datos
      },
      (error) => {
        console.error('Error fetching artworks:', error);
      }
    );
  

    if (page > 0 && page <= this.pagination.total_pages) {
      this.artworksService.getArtworks(page).subscribe((response: any) => {
        this.obras = response.data;
        this.pagination = response.pagination;
      });
    }
  }
}