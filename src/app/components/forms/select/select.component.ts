import { Component } from '@angular/core';
import { FormsComponent } from '../forms.component';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [FormsComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {}
