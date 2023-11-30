import { Component, OnInit, Input } from '@angular/core';
import { ServMisPrestamosService } from 'src/app/services/serv-mis-prestamos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

  constructor(private servi : ServMisPrestamosService) { }

  ngOnInit() {}
  @Input() id : number = 0;
  @Input() editorial : string = "";
  @Input() fecha : string = "";
  @Input() titulo : string = "";
  @Input() descripcion : string = "";
  @Input() isbn : string = "";
  @Input() autores : string = "";

  submit() {
    var librot = {
      titulo: this.titulo,
      id: this.id,
      editorial: this.editorial,
      fecha: this.fecha,
      descripcion: this.descripcion,
      isbn: this.isbn,
      autores: this.autores
    };
    this.servi.add(librot).subscribe(

      (libro) => librot = libro
    )
  }

}
