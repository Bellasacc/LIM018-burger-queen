import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarHeaderComponent } from './nav-bar-header.component';

describe('NavBarHeaderComponent', () => {
  let component: NavBarHeaderComponent;
  let fixture: ComponentFixture<NavBarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
