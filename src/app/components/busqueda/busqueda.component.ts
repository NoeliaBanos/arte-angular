import { Component, OnInit } from '@angular/core';
import { ArtworksService, Iartwork } from '../../services/artworks.service';

@Component({
  selector: 'app-busqueda',
  standalone: false,
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  obras: Iartwork[] = [];
  pagination: any = {};
  searchQuery: string = '';
  searchType: string = 'title';
  isLoading: boolean | undefined;

  constructor(private artworksService: ArtworksService) {}

 

  onSearch() {
    const query = this.searchQuery.trim();

    if (query) {
      this.isLoading = true; // Activar el estado de carga
      this.artworksService.searchArtworks(query, this.searchType).subscribe({
        next: (response) => {
          this.obras = response.slice(0, 10); // Limitar a 10 resultados
          this.isLoading = false; // Desactivar el estado de carga
        },
        error: (error) => {
          console.error('Error al buscar obras:', error);
          this.isLoading = false; // Desactivar el estado de carga en caso de error
        }
      });
    } else {
      this.obras = []; // Limpiar resultados si no hay consulta
    }
  }
}