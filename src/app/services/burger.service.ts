import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Order from '../interfaces/order.interface';
import Menu from './../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  constructor(private firestore: Firestore) { }

  getMenu(nameCollection: string): Observable<Menu[]> {
    
    return collectionData(collection(this.firestore, nameCollection), {idField: "id"}) as Observable<Menu[]>;
  }

  saveOrder(orders: Order) {
    return addDoc(collection(this.firestore, 'Orders'), orders);
  }

}
