import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorradoPage } from './borrado.page';

const routes: Routes = [
  {
    path: '',
    component: BorradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorradoPageRoutingModule {}
