import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-padre',
    templateUrl: './padre.component.html'
})

export class PadreComponent{
    padre = '';

    padreForm = new FormGroup ({
        nombre: new FormControl(''),
        apellido: new FormControl(''),
        edad: new FormControl(''),
        //fecNac: new FormGroup({
          //  start: new FormControl(''),
          //end: new FormControl('')
        //})
    });

    setHijo(){
        this.padre = "Soy el Componente Hijo Varon";
    }

    setHija(){
        this.padre= "Soy la Componenta Hija Mujer "
    }

    guardar(){}
}