import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Menu from './../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  constructor(private firestore: Firestore) { }

  getMenu(nameCollection: string): Observable<Menu[]> {
    
    return collectionData(collection(this.firestore, nameCollection)) as Observable<Menu[]>;
  }

}
