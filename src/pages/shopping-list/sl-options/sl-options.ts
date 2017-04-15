import { ViewController } from "ionic-angular";
import { Component } from "@angular-core";
// inline template
@Component({
  selector: 'page-sl-options',
  templateUrl: 'sl-options.html'
})
export class SLOptionsPage{
  constructor(private viewCtrl: ViewController){}

  // method
  onAction(action: string){
    this.viewCtrl.dismiss({action: action});
  }
}
