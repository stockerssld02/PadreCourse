import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseReviewComponent } from './course-review/course-review.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CoursesFavoritesComponent } from './courses-favorites/courses-favorites.component';



@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailsComponent,
    CourseReviewComponent,
    CourseSearchComponent,
    CoursesFavoritesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
