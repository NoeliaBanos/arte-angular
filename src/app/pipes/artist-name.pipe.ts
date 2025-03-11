import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artistName',
  standalone: false
})
export class ArtistNamePipe implements PipeTransform {

  transform(artist: string | null): string {
    return artist ? artist : 'Autor desconocido';
  }

}
