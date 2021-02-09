import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentAddedPage } from './student-added.page';

const routes: Routes = [
  {
    path: '',
    component: StudentAddedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentAddedPageRoutingModule {}
