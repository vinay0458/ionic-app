import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rest } from '../../providers/rest';
//import {HomePage} from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userDetails: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest: Rest) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');


  }
  login(){
  console.log('LoginPage');
  this.rest.getlogin().subscribe(
   userdetails => this.userDetails = userdetails

  );
  console.log(this.userDetails);
  // this.navCtrl.push(HomePage);
 }

}
