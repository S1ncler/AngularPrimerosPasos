import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css'],
})
export class Formulario2Component implements OnInit {
  arroba = "@"
  punto = "."
  persona = {
    nombre: '',
    edad: "",
    email: ""
  };

  constructor() {}

  ngOnInit(): void {
  }

  enviar() {
    console.log(this.persona)
  }
}