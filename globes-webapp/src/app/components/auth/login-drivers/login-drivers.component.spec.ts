import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDriversComponent } from './login-drivers.component';

describe('LoginDriversComponent', () => {
  let component: LoginDriversComponent;
  let fixture: ComponentFixture<LoginDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
