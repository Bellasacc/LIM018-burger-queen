import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
import Order from '../interfaces/order.interface';
import Menu from './../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  constructor(private firestore: AngularFirestore) { }

    getMenu(nameCollection: string): Observable<Menu[]> {
      return this.firestore.collection(nameCollection).valueChanges({idField: 'id'}) as Observable<Menu[]>;
   }

    saveOrder(orders: Order) {
      return this.firestore.collection('Orders').add(orders);
    }

    getOrders(orderStatus: string) {
    // Se ha generado un índice en firestore para hacer este tipo de consulta con campos distintos 
      const queryOrders = (ref: any) => ref.where('status', '==', orderStatus).orderBy('dateCreation', 'asc');
      return this.firestore.collection('Orders', queryOrders).valueChanges({idField: 'id'});
    }

    changeStatus(id: string, order: any) {
      return this.firestore.collection('Orders').doc(id).update(order);
    }

}
