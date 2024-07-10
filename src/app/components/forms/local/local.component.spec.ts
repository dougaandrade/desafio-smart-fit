import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LocalComponent } from './local.component';

describe('LocalComponent', () => {
  let component: LocalComponent;
  let fixture: ComponentFixture<LocalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LocalComponent]
    });
    fixture = TestBed.createComponent(LocalComponent);
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
