import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
const STORAGE_KEY = 'panierPizza';

@Injectable()
export class PanierServiceProvider {

  constructor(public storage: Storage) {
  }


  getAllPizza(){
    return this.storage.get(STORAGE_KEY);
  }

  ajouterPanier(pizzaId) {
    return this.getAllPizza().then(result => {
      if (result) {
        result.push(pizzaId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [pizzaId]);
      }
    });
  }
 
  deletePanier(pizzaId) {
    return this.getAllPizza().then(result => {
      if (result) {
        var index = result.indexOf(pizzaId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

}
