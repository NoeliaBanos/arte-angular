import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  standalone: false,
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener el parámetro `id` desde la ruta
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id'); // Aquí obtienes el parámetro `id`
      // Ahora puedes usar este `id` para hacer una petición o mostrar información relacionada
    });
  }
}