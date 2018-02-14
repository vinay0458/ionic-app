import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Rest } from '../../providers/rest';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rootPage:any = 'TabsPage';

  countries: string[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: Rest) {

  }

  ionViewDidLoad() {
    
  }

  

}
