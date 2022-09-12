import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  waiter: string = 'MESERO';
  srcWaiter: string = './assets/img/waiter.png';

  chef: string = 'COCINERO';
  srcChef: string = './assets/img/chef.png';

  constructor() { }

  ngOnInit(): void {
  }

}
