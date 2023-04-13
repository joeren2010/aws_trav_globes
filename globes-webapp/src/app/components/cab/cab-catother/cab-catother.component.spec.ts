import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabCatotherComponent } from './cab-catother.component';

describe('CabCatotherComponent', () => {
  let component: CabCatotherComponent;
  let fixture: ComponentFixture<CabCatotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabCatotherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabCatotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
