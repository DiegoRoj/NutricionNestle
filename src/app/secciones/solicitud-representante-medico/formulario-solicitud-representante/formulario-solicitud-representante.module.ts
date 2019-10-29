import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormularioSolicitudRepresentantePage } from './formulario-solicitud-representante.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioSolicitudRepresentantePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormularioSolicitudRepresentantePage]
})
export class FormularioSolicitudRepresentantePageModule {}
