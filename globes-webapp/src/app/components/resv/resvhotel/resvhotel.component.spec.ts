import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResvhotelComponent } from './resvhotel.component';

describe('ResvhotelComponent', () => {
  let component: ResvhotelComponent;
  let fixture: ComponentFixture<ResvhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResvhotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResvhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
