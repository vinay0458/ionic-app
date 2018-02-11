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
    confirmpassword:'',
    type:'register'
  };
  err:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest: Rest) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signup(firstname,lastname,email,password,confirmpassword){
        this.userDetails={
          firstname:firstname,
          lastname:lastname,
          email:email,
          password:password,
          confirmpassword:confirmpassword,
          type:'register'
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
