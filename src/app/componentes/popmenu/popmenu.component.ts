import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popmenu',
  templateUrl: './popmenu.component.html',
  styleUrls: ['./popmenu.component.scss'],
})
export class PopmenuComponent implements OnInit {

  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick( valor: number ){
    
    console.log('item:', valor);

     this.popoverCtrl.dismiss({
       item: valor
     });

  }

}
