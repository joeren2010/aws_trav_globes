import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabCatadmsComponent } from './cab-catadms.component';

describe('CabCatadmsComponent', () => {
  let component: CabCatadmsComponent;
  let fixture: ComponentFixture<CabCatadmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabCatadmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabCatadmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
