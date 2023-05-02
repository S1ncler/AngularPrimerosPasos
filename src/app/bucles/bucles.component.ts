import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css'],
})
export class BuclesComponent implements OnInit {

  personas: Persona[] = [
    {nombre: "Daniel", edad: 28},
    {nombre: "Felipe", edad: 21},
    {nombre: "Andres", edad: 40},
    {nombre: "Nicolas", edad: 17},
    {nombre: "Liliana", edad: 26}
  ];

  constructor() {}

  ngOnInit(): void {}
}
