import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabCatdriverComponent } from './cab-catdriver.component';

describe('CabCatdriverComponent', () => {
  let component: CabCatdriverComponent;
  let fixture: ComponentFixture<CabCatdriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabCatdriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabCatdriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
