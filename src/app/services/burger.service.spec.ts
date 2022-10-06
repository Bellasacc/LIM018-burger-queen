import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {  of } from 'rxjs';

import { BurgerService } from './burger.service';

describe('BurgerService', () => {
  let service: BurgerService;
  let angularFirestoreMock: any;
  let fsCollectionMock: any;
  let fsAddMock: any;
  let fsDocMock: any;
  let fsUpdateMock: any;
  beforeEach(async() => {
    angularFirestoreMock = jasmine.createSpyObj('AngularFirestore', ['collection']);
    

    await TestBed.configureTestingModule({
      providers: [ BurgerService, { provide: AngularFirestore, useValue: angularFirestoreMock}],
    });
    service = TestBed.inject(BurgerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getMenu', () => {
    fsCollectionMock = jasmine.createSpyObj('collection', ['valueChanges']);
    angularFirestoreMock.collection.and.returnValue(fsCollectionMock);
    fsCollectionMock.valueChanges.and.returnValue(of([{}]));
    service.getMenu('burgers');
    expect(fsCollectionMock.valueChanges).toHaveBeenCalled();
  });

  it('#saveOrder', () => {
    fsAddMock = jasmine.createSpyObj('collection', ['add']);
    angularFirestoreMock.collection.and.returnValue(fsAddMock);
    fsAddMock.add.and.returnValue(of());
    let item = { status: '1', client: '',description: 'Jugo de frutas',dateCreation: 0, dateFinally: 0, listOrder:[], time: 10, total: 0};
    service.saveOrder(item);
    expect(fsAddMock.add).toHaveBeenCalled();
  });

 it('#getOrders', () => {
  const serviceStub = () => { 
    const ref = {
      where: () => {}
    }
    return ref;
  }
    fsCollectionMock = jasmine.createSpyObj('collection', ['valueChanges']);
   // angularFirestoreMock.collection('',serviceStub).and.returnValue(fsCollectionMock)
    angularFirestoreMock.collection.and.returnValue(fsCollectionMock);
    fsCollectionMock.valueChanges.and.returnValue(of([{}]));
    service.getOrders('pendiente');
   
    expect(angularFirestoreMock.collection).toHaveBeenCalled();
    expect(fsCollectionMock.valueChanges).toHaveBeenCalled();
  });
 
  it('#chageStatus', () => {
    fsDocMock = jasmine.createSpyObj('collection', ['doc']);
    fsUpdateMock = jasmine.createSpyObj('doc', ['update']);
    angularFirestoreMock.collection.and.returnValue(fsDocMock);
    fsDocMock.doc.and.returnValue(fsUpdateMock);
    fsUpdateMock.update.and.returnValue(of());
    let item = { status: 'listo', client: '',description: 'Jugo de frutas',dateCreation: 0, dateFinally: 0, listOrder:[], time: 10, total: 0, timeString: 0};
    service.changeStatus('1',item);
    expect(fsUpdateMock.update).toHaveBeenCalled()
  });
});
