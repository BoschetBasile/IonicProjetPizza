import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PizzaServiceProvider} from '../../providers/pizza-service/pizza-service';
import {PizzaAdminPage} from '../pizza-admin/pizza-admin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pizzas: any;

  Admin: PizzaAdminPage;

  constructor(public navCtrl: NavController, public pizzaServiceProvider : PizzaServiceProvider)
  {
    this.getPizza();
  }

  goToAdminPage() {
  //push another page onto the history stack
  //causing the nav controller to animate the new page in
  this.navCtrl.push(PizzaAdminPage);
}

  getPizza() {
    this.pizzaServiceProvider.getPizza()
    .then(data => {
      this.pizzas = data;
      console.log(this.pizzas);
    });
  }

}
