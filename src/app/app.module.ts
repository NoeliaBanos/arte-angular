import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import {  provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { Error404Component } from './components/error404/error404.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ArtistNamePipe } from './pipes/artist-name.pipe';
import { ImagesArrayPipe } from './pipes/images-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    AcercadeComponent,
    Error404Component,
    BusquedaComponent,
    ArtistNamePipe,
    ImagesArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    //HttpClientModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
