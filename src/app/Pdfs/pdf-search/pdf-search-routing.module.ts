import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfSearchPage } from './pdf-search.page';

const routes: Routes = [
  {
    path: '',
    component: PdfSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfSearchPageRoutingModule {}
