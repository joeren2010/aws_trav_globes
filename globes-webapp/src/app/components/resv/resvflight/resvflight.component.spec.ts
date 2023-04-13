import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResvflightComponent } from './resvflight.component';

describe('ResvflightComponent', () => {
  let component: ResvflightComponent;
  let fixture: ComponentFixture<ResvflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResvflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResvflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
