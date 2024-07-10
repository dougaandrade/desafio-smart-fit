import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MethodsFilter } from '../../services/methods-filter.service';
import { FormsComponent } from './forms.component';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(() => {
    const methodsFilterStub = () => ({
      filtersmethods: { subscribe: f => f({}) },
      loadAllAcademias: () => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FormsComponent],
      providers: [{ provide: MethodsFilter, useFactory: methodsFilterStub }]
    });
    spyOn(FormsComponent.prototype, 'updateResultadosCount');
    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`formGroup has default value`, () => {
    expect(component.formGroup).toEqual(methods.formGroup);
  });

  it(`isModalVisible has default value`, () => {
    expect(component.isModalVisible).toEqual(false);
  });

  it(`resultadosCount has default value`, () => {
    expect(component.resultadosCount).toEqual(0);
  });

  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(FormsComponent.prototype.updateResultadosCount).toHaveBeenCalled();
    });
  });
});
