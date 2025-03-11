import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta predeterminada
  { path: 'inicio', component: InicioComponent }, // Ruta para /inicio
  { path: '**', redirectTo: '/inicio' } // Ruta comodín para manejar errores 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
