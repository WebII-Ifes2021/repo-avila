import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-hija',
    templateUrl: './hija.component.html'
})
export class HijaComponent{
    @Input()
    hija = "Hola estoy probando la llamada al componente hija mujer";
}