import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})

export class AutoComponent implements OnInit {
  
  autoForm = new FormGroup ({
    marca: new FormControl(''),
    color: new FormControl(''),
    modelo: new FormControl(''),
    patente: new FormControl(''),
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initAutoForm();
  }

  initAutoForm(){
    this.autoForm=this.fb.group({
      marca:[''],
      color:'',
      modelo:'', 
      patente:''
    });
  }
  
  cambiarDatos(){
    this.autoForm.setValue({
      marca:'FORD',
      color: 'Gris',
      modelo: 'ECO SPORT',
      patente:'JMS 187'
    });
  }

  cambiarColor(){
    this.autoForm.patchValue({
    color: 'Negro'
  })
  }

 // crearAuto() {}

}