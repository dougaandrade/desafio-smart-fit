import { CommonModule } from '@angular/common';
import { Component, input, Input, OnInit } from '@angular/core';
import { Academias } from '../../Interfaces/Ilocation.interface';
import { CheckboxComponentComponent } from './checkbox-component/checkbox-component.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, CardsComponent, CheckboxComponentComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  @Input() card!: Academias;

}
