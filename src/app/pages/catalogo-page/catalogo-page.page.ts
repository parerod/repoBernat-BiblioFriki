import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/interfaces/libro';
import { ServCatalogoService } from 'src/app/services/serv-catalogo.service';

@Component({
  selector: 'app-catalogo-page',
  templateUrl: './catalogo-page.page.html',
  styleUrls: ['./catalogo-page.page.scss'],
})
export class CatalogoPagePage implements OnInit {

  lista! : Libro[];

  constructor(private servi : ServCatalogoService) { 
    
}

  ngOnInit() {
    this.servi.getAll().subscribe(

      (resp) => {

        this.lista = resp;

  });
  }

}
