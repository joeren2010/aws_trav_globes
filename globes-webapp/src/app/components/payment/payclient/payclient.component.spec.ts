import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayclientComponent } from './payclient.component';

describe('PayclientComponent', () => {
  let component: PayclientComponent;
  let fixture: ComponentFixture<PayclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
