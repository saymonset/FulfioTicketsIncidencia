import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionesComponent } from './devoluciones.component';

describe('DevolucionesComponent', () => {
  let component: DevolucionesComponent;
  let fixture: ComponentFixture<DevolucionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevolucionesComponent]
    });
    fixture = TestBed.createComponent(DevolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
