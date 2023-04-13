import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabCategoryComponent } from './cab-category.component';

describe('CabCategoryComponent', () => {
  let component: CabCategoryComponent;
  let fixture: ComponentFixture<CabCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
