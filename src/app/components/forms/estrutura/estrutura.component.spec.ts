import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EstruturaComponent } from './estrutura.component';

describe('EstruturaComponent', () => {
  let component: EstruturaComponent;
  let fixture: ComponentFixture<EstruturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [EstruturaComponent]
    });
    fixture = TestBed.createComponent(EstruturaComponent);
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
