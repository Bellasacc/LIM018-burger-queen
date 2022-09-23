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
  // item1 = {...this.item, extra: 'queso'};
  @Output() sendItem:EventEmitter<any> = new EventEmitter<{}>();

  newItem: any;

  // ngOnDestroy(): void {
  //   this.item.description = this.item.description + 'queso';
  //   console.log(this.item);
    
  //   throw new Error('Method not implemented.');
  // }

  // public show = false;

  @ViewChild('modal') modal!:ElementRef;

  extras: Array<any> = [{name: 'queso', id: '1', price: 1, select: false}, {name: 'huevo', id: '2', price: 1, select: false}];

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
    console.log(this.extras)
  }

  showModal() {
    
    this.modal.nativeElement.showModal();
    // this.show = true;
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
    // this.show = false;
  }

}
