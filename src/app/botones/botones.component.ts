import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css'],
})
export class BotonesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  text_color: String = '';
  buttonDisabled: boolean = false;
  srcImg: string = '';
  imgs: string[] = [
    '',
    'https://images.pexels.com/photos/13617132/pexels-photo-13617132.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    'https://images.pexels.com/photos/15857470/pexels-photo-15857470.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    'https://images.pexels.com/photos/14712543/pexels-photo-14712543.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
  ];

  colortexto(color: string = 'negro') {
    if (color === 'rojo') this.text_color = 'text-danger';
    if (color === 'verde') this.text_color = 'text-success';
    if (color === 'azul') this.text_color = 'text-primary';
  }
  actDeac() {
    this.buttonDisabled = !this.buttonDisabled;
  }
  cambioImg(num: number = 0) {
    this.srcImg = this.imgs[num];
  }
}
