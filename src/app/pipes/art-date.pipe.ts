import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artDate',
  standalone: false
})
export class ArtDatePipe implements PipeTransform {

  transform(date_display: string | null): string {
    return date_display ? date_display : 'Fecha no disponible';
  }

}
