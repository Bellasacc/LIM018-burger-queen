import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-name-client',
  templateUrl: './request-name-client.component.html',
  styleUrls: ['./request-name-client.component.css']
})
export class RequestNameClientComponent implements OnInit {

  constructor(private route: Router) { }
  
  name: string = '';
  message: string = '';

  ngOnInit(): void {
  }

  onNext() {
    if (this.name === '') {
      this.message = '*Ingresa nombre del cliente';
    } else {
      this.route.navigate(['/hacer-pedido'], { queryParams: { data: this.name } });
    }
  }  
}
