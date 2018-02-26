import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PizzaServiceProvider} from '../../providers/pizza-service/pizza-service';
/**
 * Generated class for the PizzaAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pizza-admin',
  templateUrl: 'pizza-admin.html',
})
export class PizzaAdminPage {
pizza = { name: '', desc: '', picture: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public pizzaServiceProvider : PizzaServiceProvider) {
  }

  savePizza() {
  this.pizzaServiceProvider.savePizza(this.pizza).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PizzaAdminPage');
  }

}