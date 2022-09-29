import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { BurgerService } from 'src/app/services/burger.service';

@Component({
  selector: 'app-kitchen-orders',
  templateUrl: './kitchen-orders.component.html',
  styleUrls: ['./kitchen-orders.component.css']
})
export class KitchenOrdersComponent implements OnInit {

  // Renderer2 para utilizar el dom de una forma mas segura
  constructor(private burgerService: BurgerService, private renderer: Renderer2) { }

  orders:any[] = [];
  time: number = 0;

  @ViewChild('liElements') liElements!: ElementRef;
  @ViewChild('pending') pending!: ElementRef;

  liElement: string = '';

  showStatus(status: string) {
    this.burgerService.getOrders(status).subscribe(order => {
      this.orders = order;
    });
  }

  async updateOrder(id: string, dateCreation: number) {
    const dateFinally = new Date().getTime();
    // falta verificar el tiempo
    const date = new Date(dateFinally - dateCreation);
    const time = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    await this.burgerService.changeStatus(id, 'listo', dateFinally, time);
    // se carga nuevamente los pendientes en la vista
    this.showStatus('pendiente');
  }

  ngOnInit(): void {
    this.showStatus('pendiente');
  }

  ngAfterViewInit(): void {
    // el evento listen funciona como un addenventlistener, el primer parametro el elemento del dom para limitar el target
    // para inicializar el nativeElement usamos el ngAfterViewInit
    this.renderer.listen(this.liElements.nativeElement, 'click', event => {
      this.liElement = event.target.textContent;
      if (this.liElement === 'Servido') {
        this.renderer.removeClass(this.pending.nativeElement, 'active');
      }
    });
  }

}
