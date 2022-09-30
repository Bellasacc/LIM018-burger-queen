import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, query, where, orderBy, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Order from '../interfaces/order.interface';
import Menu from './../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  constructor(private firestore: Firestore) { }

  getMenu(nameCollection: string): Observable<Menu[]> {
    
    return collectionData(collection(this.firestore, nameCollection), {idField: 'id'}) as Observable<Menu[]>;
  }

  saveOrder(orders: Order) {
    return addDoc(collection(this.firestore, 'Orders'), orders);
  }

  getOrders(orderStatus: string): Observable<[]> {
    // Se ha generado un índice en firestore para hacer este tipo de consulta con campos distintos
    const q = query(collection(this.firestore, 'Orders'), where('status', '==', orderStatus), orderBy('dateCreation', 'asc'));  
    return collectionData(q, {idField: 'id'}) as Observable<[]>;
  }

  changeStatus(id: string, status: string, dateFinally: Date, time: number, timeString: string) {
    const orderPendingRef = doc(this.firestore, 'Orders', id);
    return updateDoc(orderPendingRef, { status, dateFinally , time, timeString});
  }

}
