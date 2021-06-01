import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class empleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input()componenteEmpleado: any;

  @Output() btnEvent = new EventEmitter<any>();

  

  devolverJefe(){
    this.btnEvent.emit(this.componenteEmpleado.edad= "Te cambio la edad por.....43.....");
  }


}
