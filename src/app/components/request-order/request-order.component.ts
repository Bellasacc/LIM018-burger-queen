import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BurgerService } from 'src/app/services/burger.service';
import { ModalBurgerComponent } from '../modals/modal-burger/modal-burger.component';
import { ModalMessageComponent } from '../modals/modal-message/modal-message.component';
@Component({
  selector: 'app-request-order',
  templateUrl: './request-order.component.html',
  styleUrls: ['./request-order.component.css']
})

export class RequestOrderComponent implements OnInit {

  menu: any[] = []; // no es necesario un inicializador
  name: any;
  
  constructor(private burger: BurgerService, private route: ActivatedRoute, private router: Router, private renderer: Renderer2) {
  }

  showMenu(kind: string) {
    this.burger.getMenu(kind).subscribe(menus => {
      this.menu = menus;
    })
  }

  items: any[] = [];
  total: number = 0;
  newItem: any;
  liElement: string = 'Desayuno';
 
  @ViewChildren('modal') modal!: QueryList<ModalBurgerComponent>; // esto trae el componente de los modales con id
  @ViewChild('modalMessage') modalMessage: ModalMessageComponent = new ModalMessageComponent();
  @ViewChild('liElements') liElements!: ElementRef;

  obtainingData(event:any){
    this.newItem = event;
    this.addItem(this.newItem);
    this.showMenu('burgers');
  }

  // funcion para preguntar si es hamburguesa o no

  askIfBurger(item: { id: string, description: string, price: number, amount: number}) {

    if (item.description.startsWith('Hamburguesa')) {
      //this.modal.nativeElement.showModal();
      const modalArray = this.modal.toArray();
      
      modalArray.forEach(modal => {
        if(modal.id === item.id){
          modal.showModal();
        }
      })
    } else {
      this.addItem(item);
    }
  }

  addItem(item: { id: string, description: string, price: number, amount: number}) {
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
    this.total = this.items.reduce((a,b) => a + (b.price * b.amount), 0);
  }

  onDeleteItem(item: { description: string, price: number, amount: number}) {
    this.items = this.items.map((elem) => {
      if (elem.description === item.description && elem.amount > 0) {
        elem.amount -= 1;
        return elem;
     }
     return elem;
    }).filter((elem) => elem.amount !== 0);
    this.total = this.items.reduce((a,b) => a + (b.price * b.amount), 0);
  }
  
  async sendOrder() {
    this.items = this.items.map((item) => {
      const obj = { amount: item.amount, description: item.description, price: item.price };
      return obj;
    });
    const order = {
      client: this.name,
      listOrder: this.items,
      dateCreation: Date.now(),
      dateFinally: Date.now(),
      status: 'pendiente',
      total: this.total
    }
    await this.burger.saveOrder(order);
    this.router.navigate(['/ingresar-nombre']);
  }

  public message = {
    alert: {
      content: 'No has ingresado nada en la orden',
      img: './assets/img/warning.png'
    },
    success: {
      content: '¡Envío de pedido exitoso!',
      img: './assets/img/check.png'
    }
  };
  objectMessage = { content: '', img: ''};

  showModalMessage() {
    if (this.items.length === 0) {
      this.objectMessage = this.message.alert;
      this.modalMessage.showModal();
    } else {
      this.objectMessage = this.message.success;
      this.modalMessage.showModal();
    }
  }

  obtainingReply(reply: boolean) {
    if (reply) {
      this.sendOrder();
    }
  }

  ngOnInit(): void {
    this.showMenu('breakfast');
    this.route.queryParams.subscribe((params: Params) => {
      this.name = params['data'];
    })
  }

  ngAfterViewInit(): void {
    // el evento listen funciona como un addenventlistener, el primer parametro el elemento del dom para limitar el target
    // para inicializar el nativeElement usamos el ngAfterViewInit
    this.renderer.listen(this.liElements.nativeElement, 'click', event => {
      this.liElement = event.target.textContent;
    });
  }
  
}
