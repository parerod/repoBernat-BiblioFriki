import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss'],
})
export class PrestamosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() id : number = 0;
  @Input() titulo : string = "";
  @Input() isbn : string = "";
  @Input() autores : string = "";

}

