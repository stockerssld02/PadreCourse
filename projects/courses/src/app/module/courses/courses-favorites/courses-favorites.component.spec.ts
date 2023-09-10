import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesFavoritesComponent } from './courses-favorites.component';

describe('CoursesFavoritesComponent', () => {
  let component: CoursesFavoritesComponent;
  let fixture: ComponentFixture<CoursesFavoritesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesFavoritesComponent]
    });
    fixture = TestBed.createComponent(CoursesFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
