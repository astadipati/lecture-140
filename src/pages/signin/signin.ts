import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../../services/auth";
import { LoadingController, AlertController } from "ionic-angular";

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(private authService: AuthService,
              private loadingCtl: LoadingController,
              private alertCtrl: AlertController){}
  onSignin(form: NgForm){
    // proses login
    const loading= this.loadingCtl.create({
      content: 'Proses Login . . .'
    });
    loading.present();
    this.authService.signin(form.value.email, form.value.password)
    .then(data => {
      loading.dismiss();
    })
    .catch(error => {
      // console.log(error);
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Login gagal',
        message: error.message,
        buttons: ['Ok']
      });
      alert.present();
    });
    // console.log(form.value);
  }
}
