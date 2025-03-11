import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagesArray',
  standalone: false
})
export class ImagesArrayPipe implements PipeTransform {

  // Lista de IDs válidos (estos IDs deben existir en la API)
  private validIds: string[] = [
    'b0effb1c-ff23-bbaa-f809-9fd94e31c1a0',
    'a1234567-bcde-8901-f234-56789abcdeff',
    '09876543-21ff-43ee-bbaa-112233445566'
  ];

  transform(id: string): string {
    if (!id || !this.validIds.includes(id)) {
      return 'assets/default-image.jpg'; // Imagen por defecto si el ID no es válido
    }
    return `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`;
  }

}
