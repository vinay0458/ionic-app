import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rest } from '../../providers/rest';
import { LoginPage }  from '../login/login';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signupResponse:any;
  userDetails={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmpassword:''
  };
  err:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest: Rest) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signup(){
        this.userDetails={
          firstname:'123456',
          lastname:'123456',
          email:'123456',
          password:'123456',
          confirmpassword:'123456'
        };
        this.rest.getSignUpStatus(this.userDetails).subscribe(
         response => this.navigate(response),
         err=>      this.err=err

        );

      }

  navigate(res){
            console.log(res);
            if(res.status===200){
              this.navCtrl.push(LoginPage);
            }else{
              console.log("error",res);
            }
          }
    }
