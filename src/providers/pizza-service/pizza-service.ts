import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Pizza } from '../../models/pizza';

/*
  Generated class for the PizzaServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PizzaServiceProvider {
  //http://10.13.0.248:3000/pizza/
  url = "http://kim.jcatania.io:3000";

  constructor(public http: HttpClient) {
    console.log('Hello PizzaServiceProvider Provider');
  }

  getPizza() {
  return new Promise(resolve => {
    this.http.get(this.url+'/pizza').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

addPizza(data) {
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'/pizza', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

savePizza(data) {
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'/pizza', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

}
