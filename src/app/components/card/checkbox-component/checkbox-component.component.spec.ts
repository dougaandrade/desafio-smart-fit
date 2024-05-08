import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponentComponent } from './checkbox-component.component';

describe('CheckboxComponentComponent', () => {
  let component: CheckboxComponentComponent;
  let fixture: ComponentFixture<CheckboxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
