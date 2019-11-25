import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProductsComponent } from './navbar-products.component';

describe('NavbarProductsComponent', () => {
  let component: NavbarProductsComponent;
  let fixture: ComponentFixture<NavbarProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
