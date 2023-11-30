import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formu = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    nombre:new FormControl('',[Validators.required,Validators.minLength(4)]),
    telefono:new FormControl('',[Validators.required,Validators.minLength(9)]),
  })

  constructor() {}

  submit() {
    console.log("Bienvenido" + this.formu.value.email)
  }
}
