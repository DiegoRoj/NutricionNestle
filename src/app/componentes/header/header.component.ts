import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopmenuComponent } from '../popmenu/popmenu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {}
  
  async mostrarPop() {
    const popover = await this.popoverCtrl.create({
      component: PopmenuComponent,
      event: event,
      mode: 'ios',
      cssClass: "popover_class"
    });

    await popover.present();
  }

}