import {Component} from '@angular/core';

@Component({
    selector: 'app-padre',
    templateUrl: './padre.component.html'
})
export class PadreComponent{
    padre = 'Esto viene del padre';

    setHijo(){
        this.padre = "Valor nuevo del padre";
    }
}