import { FilterUnitsService } from './../../services/filter-units.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { Ilocation } from '../../Interfaces/Ilocation.interface';
import { first, last } from 'rxjs';
import { Ihour_index } from '../../Interfaces/Ihour_index.interface';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent implements OnInit {
  formGroup!: FormGroup;
  filteredResults: Ilocation[] = [];
  results: Ilocation[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService,
    private filterUnitsService: FilterUnitsService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false,
    });
    this.unitService.getAllUnits().subscribe((data) => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    });
  }

  onSubmmit() {
    let { showClosed, hour } = this.formGroup.value;
    this.filteredResults = this.filterUnitsService.filter(
      this.results,
      showClosed,
      hour
    );
  }
  onClear() {
    this.formGroup.reset();
  }
}
