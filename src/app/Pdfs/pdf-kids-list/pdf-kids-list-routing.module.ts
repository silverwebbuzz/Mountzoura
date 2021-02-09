import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfKidsListPage } from './pdf-kids-list.page';

const routes: Routes = [
  {
    path: '',
    component: PdfKidsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfKidsListPageRoutingModule {}
