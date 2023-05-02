import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit{

  dia?: number;

  constructor() {}

  ngOnInit(): void {
    
  }

  cambio(dia: string = "0"){
    this.dia = parseInt(dia)
  }

}
