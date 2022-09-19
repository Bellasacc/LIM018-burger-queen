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
    // this.menu = [{
    //   description: 'description',
    //   price: 0,
    // }]
  }

  showMenu(kind: string): void {
    this.burger.getMenu(kind).subscribe(menus => {
      this.menu = menus;
    })
  }

  ngOnInit(): void {
    this.burger.getMenu('breakfast').subscribe(menus => {
      this.menu = menus;
    }) 

    this.route.queryParams.subscribe((params: any) => {
      this.name = params.data;
    })
    
  }
  
}
