import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-builder',
  templateUrl: './formulario-builder.component.html',
  styleUrls: ['./formulario-builder.component.css']
})
export class FormularioBuilderComponent implements OnInit{
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}

  formUser = this.fb.group({
    name: [``, [Validators.required]],
    email:[``, [Validators.required, Validators.email]]
  });

  get name() {
    return this.formUser.get('name') as FormControl;
  }
  get email() {
    return this.formUser.get('email') as FormControl;
  }
  enviar() {
    console.log(this.formUser.value)
  }

}
