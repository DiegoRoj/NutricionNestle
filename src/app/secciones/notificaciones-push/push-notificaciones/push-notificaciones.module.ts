import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PushNotificacionesPage } from './push-notificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: PushNotificacionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PushNotificacionesPage]
})
export class PushNotificacionesPageModule {}
