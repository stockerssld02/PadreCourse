import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';
import { FilterCoursesComponent } from './filter-courses/filter-courses.component';
import { GridCoursesComponent } from './grid-courses/grid-courses.component';

@NgModule({
  declarations: [
    CardComponent,
    GridCoursesComponent,
    FilterCoursesComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent,
    GridCoursesComponent,
    FilterCoursesComponent
  ]
})
export class SharedModule { }
