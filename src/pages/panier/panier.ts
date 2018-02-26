import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PizzaServiceProvider} from '../../providers/pizza-service/pizza-service';
import {PanierServiceProvider} from '../../providers/panier-service/panier-service';
 
@IonicPage()
@Component({
  selector: 'page-panier',
  templateUrl: 'panier.html',
})
export class PanierPage {
  pizzas: any;

  constructor(public navCtrl: NavController, public pizzaServiceProvider: PizzaServiceProvider, public panierProvider: PanierServiceProvider,
  public navParams: NavParams) {
    this.getPanier();
  }
 
  ajouterPanier() {
    this.panierProvider.ajouterPanier(this.pizzas.id);
  }
 
  deletePanier() {
    this.panierProvider.deletePanier(this.pizzas.id);
  }

  getPanier(){
    this.pizzaServiceProvider.getPizza()
    .then(data => {
      this.pizzas = data;
      console.log(this.pizzas);
    });
    var panier = [];


  }

}