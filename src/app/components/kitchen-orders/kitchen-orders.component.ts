import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
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
  timeString: string = '';

  @ViewChild('liElements') liElements!: ElementRef;
  @ViewChild('pending') pending!: ElementRef;

  liElement: string = '';

  showStatus(status: string) {
    this.burgerService.getOrders(status).subscribe(order => {
      this.orders = order;
    });
  }

  async updateOrder(id: string, dateCreation: Timestamp) {
    const dateFinally = new Date();
    const date = dateCreation.toDate();
    const finish = Date.UTC(dateFinally.getFullYear(), dateFinally.getMonth(), dateFinally.getDate(), dateFinally.getHours(), dateFinally.getMinutes(), dateFinally.getSeconds());
    const start = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
    const time = ((finish - start) / (1000));
    console.log(time);
    
    let hour: string | number = Math.floor(time / 3600);
    hour = (hour < 10)? '0' + hour : hour;
    let minute: string | number =  Math.floor((time / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    let second: string | number = time % 60;
    second = (second < 10)? '0' + second : second;
    this.timeString = hour + ':' + minute + ':' + second;
    
    await this.burgerService.changeStatus(id, 'listo', dateFinally, time, this.timeString);
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
