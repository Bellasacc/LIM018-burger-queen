import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNameClientComponent } from './request-name-client.component';

describe('RequestNameClientComponent', () => {
  let component: RequestNameClientComponent;
  let fixture: ComponentFixture<RequestNameClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestNameClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestNameClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
