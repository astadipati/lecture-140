import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, AlertController } from "ionic-angular";
import { AuthService } from "../../services/auth";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // inject services
  constructor(private authService: AuthService,
              private loadingCtl: LoadingController,
              private alertCtrl: AlertController){
              }
  onSignup(form: NgForm){
    // loading
    const loading = this.loadingCtl.create({
      content: 'Mendaftarkan . . .'
    });
    loading.present();
    // end loading
    this.authService.signup(form.value.email, form.value.password)
      .then (data =>{
        loading.dismiss(); //jika berhasil loading ilang
      }
        // console.log(data)
      )
      .catch(error=> {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title : 'Gagal daftar',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      }//console.log(error)
    );
      // console.log(form.value);
  }
}
