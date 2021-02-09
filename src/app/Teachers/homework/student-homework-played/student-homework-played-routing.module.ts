import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentHomeworkPlayedPage } from './student-homework-played.page';

const routes: Routes = [
  {
    path: '',
    component: StudentHomeworkPlayedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentHomeworkPlayedPageRoutingModule {}
