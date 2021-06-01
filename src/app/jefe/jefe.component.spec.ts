import { ComponentFixture, TestBed } from '@angular/core/testing';

import { jefeComponent } from './jefe.component';

describe('jefeComponent', () => {
  let component: jefeComponent;
  let fixture: ComponentFixture<jefeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ jefeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(jefeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
