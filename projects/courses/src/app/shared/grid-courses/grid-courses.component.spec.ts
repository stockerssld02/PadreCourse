import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCoursesComponent } from './grid-courses.component';

describe('GridCoursesComponent', () => {
  let component: GridCoursesComponent;
  let fixture: ComponentFixture<GridCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridCoursesComponent]
    });
    fixture = TestBed.createComponent(GridCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
