import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResvComponent } from './resv.component';

describe('ResvComponent', () => {
  let component: ResvComponent;
  let fixture: ComponentFixture<ResvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
