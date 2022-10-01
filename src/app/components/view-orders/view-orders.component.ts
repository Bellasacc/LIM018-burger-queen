import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BurgerService } from 'src/app/services/burger.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  constructor(private burgerService: BurgerService, private renderer: Renderer2) { }

  orders:any[] = [];
  timeString: string = '';

  @ViewChild('liElements') liElements!: ElementRef;
  @ViewChild('pending') pending!: ElementRef;

  liElement: string = '';

  showStatus(status:string) {
    this.burgerService.getOrders(status).subscribe(order => {
      this.orders = order;
    });
  }

  ngOnInit(): void {
    this.showStatus('pendiente');
  }

  async updateOrder(id: string) {
    
    await this.burgerService.changeStatus(id, { status: 'entregado' });
    // se carga nuevamente los pendientes en la vista
    this.showStatus('listo');
  }

  ngAfterViewInit(): void {
    // el evento listen funciona como un addenventlistener, el primer parametro el elemento del dom para limitar el target
    // para inicializar el nativeElement usamos el ngAfterViewInit
    this.renderer.listen(this.liElements.nativeElement, 'click', event => {
      this.liElement = event.target.textContent;
      if (this.liElement === 'Listo' || this.liElement === 'Entregado') {
        this.renderer.removeClass(this.pending.nativeElement, 'active');
      }
    });
  }

}
