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
  addItem(item: object) {
    this.items.push(item);
    console.log(this.items);

    this.total = this.items.reduce((a,b) => a+b.price,0)
  }

  ngOnInit(): void {
    this.showMenu('breakfast');
    this.route.queryParams.subscribe((params: any) => {
      this.name = params.data;
    })
  }
  
}
