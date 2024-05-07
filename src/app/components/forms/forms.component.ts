import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { Ilocation } from '../../Interfaces/Ilocation.interface';

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
    private unitService: GetUnitsService
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
    if (!this.formGroup.value.showClosed) {
      this.filteredResults = this.results.filter(location => location.opened === true)
    }
  }
  onClear() {
    this.formGroup.reset();
  }
}
