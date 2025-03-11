import { Component } from '@angular/core';
import { ArtworksService } from '../../services/artworks.service';

@Component({
  selector: 'app-busqueda',
  standalone: false,
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {

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
      console.log(response); // Verifica cómo es la estructura de la respuesta
      if (response && response.data) {
        this.obras = response.data;
        this.pagination = response.pagination;
        console.log(this.obras); // Verifica que obras esté correctamente asignado
      }
    });
  }
  

  // onSearch() {
  //   // Si hay una búsqueda, la usamos, sino, pasamos una cadena vacía.
  //   const query = this.searchQuery ? this.searchQuery : '';
    
  //   // Usamos el servicio para buscar obras con la consulta y el tipo de búsqueda (si se aplica)
  //   this.artworksService.searchArtworks(query, this.searchType).subscribe((response: any) => {
  //     // Mapear las obras obtenidas para agregar la URL de la imagen
  //     this.obras = response.data.map((obra: { image_id: any; }) => {
  //       return {
  //         ...obra,
  //         // Construir la URL de la imagen
  //         imageUrl: obra.image_id ? `https://www.artic.edu/iiif/2/${obra.image_id}/full/843,/0/default.jpg` : ''
  //       };
  //     });

  //     this.pagination = response.pagination; // Asumimos que la paginación está en la respuesta
  //     console.log(this.obras); // Verificar los datos
  //   }, (error) => {
  //     console.error('Error fetching artworks:', error);
  //   });
  // }

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