import { CommonModule } from '@angular/common';
import { Component, effect, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule
    , ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})

export class FormsComponent implements OnInit {

  formGroup!: FormGroup;


  results = [333,3,33,3,3,3,3,33,3,33,];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
      this.formGroup = new FormGroup({
      hour: new FormControl(),
      showClosed: new FormControl(false),
  })
  }

  onSubmmit() {
    console.log(this.formGroup.value);
  }
  onClear() {
    this.formGroup.reset();
  }

}






