import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabCatclientComponent } from './cab-catclient.component';

describe('CabCatclientComponent', () => {
  let component: CabCatclientComponent;
  let fixture: ComponentFixture<CabCatclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabCatclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabCatclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
