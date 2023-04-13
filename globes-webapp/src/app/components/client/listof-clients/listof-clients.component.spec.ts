import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofClientsComponent } from './listof-clients.component';

describe('ListofClientsComponent', () => {
  let component: ListofClientsComponent;
  let fixture: ComponentFixture<ListofClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
