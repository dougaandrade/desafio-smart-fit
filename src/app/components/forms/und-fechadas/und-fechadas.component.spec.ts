import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UndFechadasComponent } from './und-fechadas.component';

describe('UndFechadasComponent', () => {
  let component: UndFechadasComponent;
  let fixture: ComponentFixture<UndFechadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [UndFechadasComponent]
    });
    fixture = TestBed.createComponent(UndFechadasComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`formGroup has default value`, () => {
    expect(component.formGroup).toEqual(methods$.formGroup);
  });

  it(`updateResultadosCount has default value`, () => {
    expect(component.updateResultadosCount).toEqual(
      methods$.updateResultadosCount
    );
  });
});
