import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobremiComponent } from './pages/sobremi/sombremi.component';
import { MitrabajoComponent } from './pages/mitrabajo/mitrabajo.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {path : '', component: SobremiComponent},
  {path : 'mitrabajo', component: MitrabajoComponent},
  {path : 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
