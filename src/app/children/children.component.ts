import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {
  //se recibe la variable del componente padre
  @Input() title?: string; 
  //se crea un evento para emitir la variable hacia el componente padre
  @Output() titleChange = new EventEmitter<string>();
  //se crea una funcion que va a devolver la variable al componente padre
  emitTitleChange(){
    //cada vez que se ejeucta la funcion se devuelve la variable al componente padre mediante el evento
    this.titleChange.emit(this.title);
  }
}
