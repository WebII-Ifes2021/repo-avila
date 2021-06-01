import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-jefe',
  templateUrl: './jefe.component.html',
  styleUrls: ['./jefe.component.css']
})
export class jefeComponent implements OnInit {

  componenteJefe : any;

  jefeForm = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      edad: new FormControl('')
  });

  
  constructor(private fb: FormBuilder) { }

  initForm(){}

  ngOnInit(): void {
    this.initForm();
  }

  setComponenteEmpleado(){
    this.componenteJefe = this.jefeForm.value;
  }
/*
  guardar(){
    debugger;
    this.jefeForm.value;
    this.jefeForm.value.apellido;
  }

  onRecibejefe(event: FormGroup) {
    debugger;
    this.jefeForm = event;
  }

*/

}
