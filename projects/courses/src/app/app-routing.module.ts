import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },

  { path: 'courses', loadChildren: () => import('./module/courses/courses.module').then((m) => m.CoursesModule) },

  { path: '**', redirectTo: '/courses' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
