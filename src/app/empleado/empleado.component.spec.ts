import { ComponentFixture, TestBed } from '@angular/core/testing';

import { empleadoComponent } from './empleado.component';

describe('empleadoComponent', () => {
  let component: empleadoComponent;
  let fixture: ComponentFixture<empleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ empleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(empleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
