import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseReviewComponent } from './course-review/course-review.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CoursesFavoritesComponent } from './courses-favorites/courses-favorites.component';

const routes: Routes = [
  { path: '', component: CourseListComponent },
  { path: 'search', component: CourseSearchComponent },
  { path: 'favorites', component: CoursesFavoritesComponent },
  { path: ':id', component: CourseDetailsComponent },
  { path: ':id/review', component: CourseReviewComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
