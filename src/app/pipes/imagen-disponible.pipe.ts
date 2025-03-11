import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenDisponible',
  standalone: false
})
export class ImagenDisponiblePipe implements PipeTransform {

  transform(image_id: string | null): string {
    return image_id ? image_id : 'Imagen no disponible';
  }

}
