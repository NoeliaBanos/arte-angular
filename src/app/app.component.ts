import { Component, OnInit } from '@angular/core';
import { ArtworksService } from './services/artworks.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'arte-angular';

  //articulos:any;
  // articulos!:Iarticulo[];

  constructor(private artworksservice:ArtworksService){}

  ngOnInit(): void {
    // this.artworksservice.obtenerArticulos().subscribe(
    //   (data) => {
    //     this.articulos = data;
    //     console.log(this.articulos);
    //   }
    // );

    
  }



}
