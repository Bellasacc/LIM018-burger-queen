import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Menu from '../interfaces/menu.interface';
@Component({
  selector: 'app-request-order',
  templateUrl: './request-order.component.html',
  styleUrls: ['./request-order.component.css']
})
export class RequestOrderComponent implements OnInit {

  menu: Menu[];

  constructor(private firestore: Firestore) {
    this.menu = [{
      description: 'cafe',
      price: 5,
    }]
  }

/*   getMenu(): Observable<Menu[]> {
    
    return getDocs(collection(this.firestore, 'drinks')).subscribe() as Observable<Menu[]>;
  } */
 
  ngOnInit(): void {
    /* this.getMenu().subscribe(menu => {
      this.menu = menu
      
    }) */
  }
  
}
