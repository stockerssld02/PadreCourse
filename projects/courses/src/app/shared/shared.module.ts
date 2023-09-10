import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';
import { GridCoursesComponent } from './grid-courses/grid-courses.component';

@NgModule({
  declarations: [
    CardComponent,
    GridCoursesComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent,
    GridCoursesComponent
  ]
})
export class SharedModule { }
