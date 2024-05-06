import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule
    , ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})

export class FormsComponent {

  public hour = new FormControl('dododododo')


  results = [];

}






