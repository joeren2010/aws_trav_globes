import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferdriverComponent } from './offerdriver.component';

describe('OfferdriverComponent', () => {
  let component: OfferdriverComponent;
  let fixture: ComponentFixture<OfferdriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferdriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferdriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
