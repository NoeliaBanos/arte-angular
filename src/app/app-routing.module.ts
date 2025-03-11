import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { Error404Component } from './components/error404/error404.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { AcercadeComponent } from './components/acercade/acercade.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
