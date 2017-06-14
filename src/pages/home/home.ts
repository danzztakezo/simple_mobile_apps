import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  splash = true;
  // tabBarElement: any;

  constructor(public navCtrl: NavController) {
    // this.tabBarElement = document.querySelector('.tabbar');
  }

  forgotPassword(){
    this.navCtrl.push(ForgotPasswordPage);
  }
  
  signup(){
    this.navCtrl.push(SignupPage);
  }

  ionViewDidLoad(){
    // this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      // this.tabBarElement.style.display = 'flex';

    },4000);
  
  }

}
