import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/interfaces/libro';
import { ServCatalogoService } from 'src/app/services/serv-catalogo.service';

@Component({
  selector: 'app-libro-page',
  templateUrl: './libro-page.page.html',
  styleUrls: ['./libro-page.page.scss'],
})
export class LibroPagePage implements OnInit {

  id: number;
  librillo!: Libro;

  constructor(contactoService : ServCatalogoService,private route: ActivatedRoute) {
    this.id = Number(route.snapshot.paramMap.get('id')!);
    console.log("Parte 1")
    contactoService.getOne(this.id).subscribe(

      (resp) => {

        this.librillo = resp;

    });
  }

  ngOnInit() {
  }

}
