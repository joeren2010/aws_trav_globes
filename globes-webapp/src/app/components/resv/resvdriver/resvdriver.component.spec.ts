import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResvdriverComponent } from './resvdriver.component';

describe('ResvdriverComponent', () => {
  let component: ResvdriverComponent;
  let fixture: ComponentFixture<ResvdriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResvdriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResvdriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
