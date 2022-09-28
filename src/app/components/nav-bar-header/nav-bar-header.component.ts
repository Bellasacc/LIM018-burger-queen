import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-header',
  templateUrl: './nav-bar-header.component.html',
  styleUrls: ['./nav-bar-header.component.css']
})
export class NavBarHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  route: string = this.router.url; // Acá obtenemos la ruta activa/actual 

  ngOnInit(): void {
  }

}
