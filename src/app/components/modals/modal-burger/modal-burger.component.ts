import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-burger',
  templateUrl: './modal-burger.component.html',
  styleUrls: ['./modal-burger.component.css']
})
export class ModalBurgerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() id = ''; // esto lo estamos llamando como atributo en el request
  @Input() item: any;
  @Output() sendItem:EventEmitter<any> = new EventEmitter<{}>();

  newItem: any;

  @ViewChild('modal') modal!:ElementRef;

  extras: Array<any> = [
    {name: 'Queso', id: '1', price: 1, select: false, img: 'https://raw.githubusercontent.com/Bellasacc/LIM018-burger-queen/main/src/assets/img/cheese.png'}, 
    {name: 'Huevo', id: '2', price: 1, select: false, img: 'https://raw.githubusercontent.com/Bellasacc/LIM018-burger-queen/main/src/assets/img/egg.png'}
  ];
  
  onChange(event:any){
    const id = event.target.value;
    const isChecked = event.target.checked;

    this.extras = this.extras.map(e => {
      if(e.id == id) {
        e.select = isChecked;
        return e;
      }
      return e;
    })
  }

  showModal() {
    this.modal.nativeElement.showModal();
  }

  closeModal() {
    this.newItem = this.item;
    this.modal.nativeElement.close();

    this.extras.forEach(extra => {
      if(extra.select){
        this.newItem.description += ' + ' + extra.name;
        this.newItem.price += extra.price;
      }
    })
    this.sendItem.emit(this.newItem);
  }

}
