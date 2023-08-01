import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposPingComponent } from './equipos-ping.component';

describe('EquiposPingComponent', () => {
  let component: EquiposPingComponent;
  let fixture: ComponentFixture<EquiposPingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquiposPingComponent]
    });
    fixture = TestBed.createComponent(EquiposPingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
