import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorradoPageRoutingModule } from './borrado-routing.module';

import { BorradoPage } from './borrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorradoPageRoutingModule
  ],
  declarations: [BorradoPage]
})
export class BorradoPageModule {}
