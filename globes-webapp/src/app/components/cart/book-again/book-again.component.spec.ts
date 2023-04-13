import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAgainComponent } from './book-again.component';

describe('BookAgainComponent', () => {
  let component: BookAgainComponent;
  let fixture: ComponentFixture<BookAgainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAgainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
