import { Component, Input } from '@angular/core';
import { CardsListComponent } from '../cards-list.component';
import { GetUnitsService } from '../../../services/get-units.service';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from '../../card/cards.component';
import { Ilocation } from '../../../Interfaces/Ilocation.interface';

@Component({
  selector: 'input-search',
  standalone: true,
  imports: [CardsListComponent, FormsModule, CardsComponent],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss',
})
export class InputSearchComponent {

}
