import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BurgerService } from 'src/app/services/burger.service';
import Menu from '../../interfaces/menu.interface';
@Component({
  selector: 'app-request-order',
  templateUrl: './request-order.component.html',
  styleUrls: ['./request-order.component.css']
})
export class RequestOrderComponent implements OnInit {

  menu: any[] = []; // no es necesario un inicializador
  name: any; 

  constructor(private burger: BurgerService, private route: ActivatedRoute) {
  }

  showMenu(kind: string): void {
    this.burger.getMenu(kind).subscribe(menus => {
      this.menu = menus;
    })
  }

  items: any[] = [];
  total: number = 0;
  addItem(item: { description: string, price: number, amount: number, link: string}) {
    // para verificar si existe en la orden aumentar la cantidad o solo ingresar uno nuevo
    if (this.items.some((elem) => elem.description === item.description )) {
      this.items = this.items.map((elem) => {
        if (elem.description === item.description) {
           elem.amount += 1;
           return elem;
        }
        return elem;
      });
    } else {
      this.items.push({ ...item, amount: 1 });
    }
    // calculamos el precio total de la orden
    this.total = this.items.reduce((a,b) => a + (b.price * b.amount),0)
  }

  ngOnInit(): void {
    this.showMenu('breakfast');
    this.route.queryParams.subscribe((params: any) => {
      this.name = params.data;
    })
  }
  
}
