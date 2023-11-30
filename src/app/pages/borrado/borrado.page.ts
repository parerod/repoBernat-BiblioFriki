import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServMisPrestamosService } from 'src/app/services/serv-mis-prestamos.service';

@Component({
  selector: 'app-borrado',
  templateUrl: './borrado.page.html',
  styleUrls: ['./borrado.page.scss'],
})
export class BorradoPage implements OnInit {

  id : number;

  constructor(private servi : ServMisPrestamosService,private route: ActivatedRoute) {
    this.id = Number(route.snapshot.paramMap.get('id')!);

  }

  ngOnInit() {
  }

  submit() {
    this.servi.delete(this.id).subscribe(

      r => {}
    );

  }

}
