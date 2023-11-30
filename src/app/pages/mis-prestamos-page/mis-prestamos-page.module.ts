import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPrestamosPagePageRoutingModule } from './mis-prestamos-page-routing.module';

import { MisPrestamosPagePage } from './mis-prestamos-page.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPrestamosPagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [MisPrestamosPagePage]
})
export class MisPrestamosPagePageModule {}
