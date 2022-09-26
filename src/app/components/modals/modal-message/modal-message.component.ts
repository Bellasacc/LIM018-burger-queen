import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.css']
})
export class ModalMessageComponent implements OnInit {

  constructor() { }
  
  @ViewChild('modal') modal!:ElementRef;

  @Input() message = { content: '', img: ''};
  @Output() sendReply:EventEmitter<any> = new EventEmitter<boolean>();

  showModal() {
    this.modal.nativeElement.showModal();
  }

  closeModal() {
    this.modal.nativeElement.close();
    if (this.message.content === '¡Envío de pedido exitoso!') {
      this.sendReply.emit(true);
    }
  }
  ngOnInit(): void {
  }

}
