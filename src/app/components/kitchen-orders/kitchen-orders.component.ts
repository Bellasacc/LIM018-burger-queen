import { Component, OnInit } from '@angular/core';
import { BurgerService } from 'src/app/services/burger.service';

@Component({
  selector: 'app-kitchen-orders',
  templateUrl: './kitchen-orders.component.html',
  styleUrls: ['./kitchen-orders.component.css']
})
export class KitchenOrdersComponent implements OnInit {

  constructor(private burgerService: BurgerService) { }

  orders:any[] = [];

  showStatus(status:string) {
    this.burgerService.getOrders(status).subscribe(order => {
      this.orders = order;
    })
  }

  ngOnInit(): void {
    this.showStatus('pendiente');
  }

}
