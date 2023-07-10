import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaTablaCambioEstadoDialogoComponent } from './incidencia-tabla-cambio-estado-dialogo.component';

describe('IncidenciaTablaCambioEstadoDialogoComponent', () => {
  let component: IncidenciaTablaCambioEstadoDialogoComponent;
  let fixture: ComponentFixture<IncidenciaTablaCambioEstadoDialogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidenciaTablaCambioEstadoDialogoComponent]
    });
    fixture = TestBed.createComponent(IncidenciaTablaCambioEstadoDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
