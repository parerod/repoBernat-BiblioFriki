import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss'],
})
export class LibroComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() titulo : string = "";
  @Input() isbn : string = "";
  @Input() autores : string = "";
  @Input() id : number = 0;

}
