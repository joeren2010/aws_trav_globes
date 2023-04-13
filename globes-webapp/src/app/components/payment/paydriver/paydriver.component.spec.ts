import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydriverComponent } from './paydriver.component';

describe('PaydriverComponent', () => {
  let component: PaydriverComponent;
  let fixture: ComponentFixture<PaydriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaydriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaydriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
