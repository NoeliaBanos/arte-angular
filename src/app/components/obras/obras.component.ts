import { Component, OnInit } from '@angular/core';
import { ArtworksService, Iartwork } from '../../services/artworks.service';

@Component({
  selector: 'app-obras',
  standalone: false,
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css']
})
export class ObrasComponent implements OnInit {
  obras: Iartwork[] = [];
  isLoading: boolean = true; // Estado de carga

  constructor(private artworksService: ArtworksService) {}

  ngOnInit() {
    this.artworksService.getArtworks(7).subscribe((response: Iartwork[]) => {
      let obrasArray: Iartwork[] = [];

      response.slice(0, 10).forEach((item: Iartwork) => {
        let artwork = { ...item };

        if (item.image_id) {
          artwork['imageUrl'] = `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`;
        } else {
          artwork['imageUrl'] = '';
        }

        obrasArray.push(artwork);
      });

      this.obras = obrasArray;
      this.isLoading = false; // Desactiva el estado de carga cuando los datos están listos
    });
  }
}