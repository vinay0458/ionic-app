import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController,NavParams } from 'ionic-angular';
/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
 @Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  sharerideRoot = 'ShareridePage'
  yourrideRoot = 'YourridePage'
  findrideRoot = 'FindridePage'


  constructor(public navCtrl: NavController) {}

}
