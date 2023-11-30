import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/interfaces/libro';
import { ServMisPrestamosService } from 'src/app/services/serv-mis-prestamos.service';

@Component({
  selector: 'app-mis-prestamos-page',
  templateUrl: './mis-prestamos-page.page.html',
  styleUrls: ['./mis-prestamos-page.page.scss'],
})
export class MisPrestamosPagePage implements OnInit {
  
  lista! : Libro[];

  constructor(private servi : ServMisPrestamosService) {
   
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.servi.getAll().subscribe(
      (r)=>{
        this.lista=r;
      }
     )
  }

}
