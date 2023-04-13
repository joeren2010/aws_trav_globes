import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPasswdComponent } from './new-passwd.component';

describe('NewPasswdComponent', () => {
  let component: NewPasswdComponent;
  let fixture: ComponentFixture<NewPasswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPasswdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPasswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
