import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCoursesComponent } from './filter-courses.component';

describe('FilterCoursesComponent', () => {
  let component: FilterCoursesComponent;
  let fixture: ComponentFixture<FilterCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterCoursesComponent]
    });
    fixture = TestBed.createComponent(FilterCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
