import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResvcabComponent } from './resvcab.component';

describe('ResvcabComponent', () => {
  let component: ResvcabComponent;
  let fixture: ComponentFixture<ResvcabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResvcabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResvcabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
