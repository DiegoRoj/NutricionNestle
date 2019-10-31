import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { InteractionFooterComponent } from './interaction-footer/interaction-footer.component';
import { PopmenuComponent } from './popmenu/popmenu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavigationHeaderComponent,
    InteractionFooterComponent,
    PopmenuComponent
  ],
  exports: [
    HeaderComponent,
    NavigationHeaderComponent,
    InteractionFooterComponent,
    PopmenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentesModule { }
