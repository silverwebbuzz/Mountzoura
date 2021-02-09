import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentHomeworkNotPage } from './student-homework-not.page';

const routes: Routes = [
  {
    path: '',
    component: StudentHomeworkNotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentHomeworkNotPageRoutingModule {}
