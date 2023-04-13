import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofDriversComponent } from './listof-drivers.component';

describe('ListofDriversComponent', () => {
  let component: ListofDriversComponent;
  let fixture: ComponentFixture<ListofDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
