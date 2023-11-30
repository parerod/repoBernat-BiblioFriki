import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { BotonesComponent } from './botones/botones.component';
import { LibroComponent } from './libro/libro.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [MenuComponent,BotonesComponent, LibroComponent, PrestamosComponent,DetalleComponent],
  exports : [MenuComponent,BotonesComponent, LibroComponent, PrestamosComponent,DetalleComponent],
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule
  ]
})
export class ComponentsModule { }
