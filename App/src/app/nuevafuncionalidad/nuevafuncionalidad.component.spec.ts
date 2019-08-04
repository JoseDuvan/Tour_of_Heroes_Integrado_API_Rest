import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevafuncionalidadComponent } from './nuevafuncionalidad.component';

describe('NuevafuncionalidadComponent', () => {
  let component: NuevafuncionalidadComponent;
  let fixture: ComponentFixture<NuevafuncionalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevafuncionalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevafuncionalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
