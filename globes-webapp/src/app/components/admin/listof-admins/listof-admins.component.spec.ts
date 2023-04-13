import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofAdminsComponent } from './listof-admins.component';

describe('ListofAdminsComponent', () => {
  let component: ListofAdminsComponent;
  let fixture: ComponentFixture<ListofAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
