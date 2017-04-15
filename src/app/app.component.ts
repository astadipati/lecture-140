import { Component, ViewChild } from '@angular/core'; //ViewChild
import { Platform, NavController, MenuController } from 'ionic-angular'; //NavController, MenuController
import { StatusBar, Splashscreen } from 'ionic-native';
import firebase from 'firebase'; //import firebase

import { TabsPage } from "../pages/tabs/tabs";
import { SigninPage } from "../pages/signin/signin";
import { SignupPage } from "../pages/signup/signup";
import { AuthService } from "../services/auth";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //tabsPage = TabsPage;
  rootPage:any = TabsPage;
  signinPage = SigninPage;
  signupPage = SignupPage;
  isAuthenticated = false;
  @ViewChild('nav') nav:NavController; //tambahkan ini di angular core

  constructor (platform: Platform,
               private menuCtrl: MenuController,
               private authService: AuthService) {
//firebase disini
  firebase.initializeApp({
    apiKey: "AIzaSyBF07Alzj3N5yIcVQRf8-_wWFiwegM4b7Y",
    authDomain: "ionpp-70c86.firebaseapp.com"
  });
  firebase.auth().onAuthStateChanged(user=>{
    if(user){
      this.isAuthenticated = true;
      // this.nav.setRoot(this.tabsPage);
      this.rootPage=TabsPage;
    }else{
      this.isAuthenticated = false;
      // this.nav.setRoot(this.signinPage);
      this.rootPage = SigninPage;
    }
  });
//end firebase
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  // method onLoad dulu kalau disini jadi property
  onLoad(page: any){
    // navigate untuk ini tidak bisa di injek ke kontroller
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
  onLogout(){
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);
  }
}
