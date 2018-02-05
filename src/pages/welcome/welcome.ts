import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage }  from '../login/login';
import { SignupPage }  from '../signup/signup';
//import { car } from '../../assets/icon/car';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    //thi.car=car;
  }
  signin(){
   this.navCtrl.push(LoginPage);
  }
  signup(){
    this.navCtrl.push(SignupPage);
  }
}
