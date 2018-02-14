import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController,NavParams } from 'ionic-angular';

/**
 * Generated class for the YourridePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-yourride',
  templateUrl: 'yourride.html',
})
export class YourridePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YourridePage');
  }

}
