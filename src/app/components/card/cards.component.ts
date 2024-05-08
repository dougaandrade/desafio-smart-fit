import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Ilocation } from '../../Interfaces/Ilocation.interface';
import { CheckboxComponentComponent } from './checkbox-component/checkbox-component.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, CardsComponent, CheckboxComponentComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {


  @Input() card!: Ilocation;

  constructor() { }

  ngOnInit(): void {
  }

}

