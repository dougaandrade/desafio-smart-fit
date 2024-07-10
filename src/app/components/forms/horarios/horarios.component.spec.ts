import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HorariosComponent } from './horarios.component';

describe('HorariosComponent', () => {
  let component: HorariosComponent;
  let fixture: ComponentFixture<HorariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HorariosComponent]
    });
    fixture = TestBed.createComponent(HorariosComponent);
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
