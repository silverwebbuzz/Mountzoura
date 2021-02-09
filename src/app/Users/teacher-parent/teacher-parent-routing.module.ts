import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherParentPage } from './teacher-parent.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherParentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherParentPageRoutingModule {}
