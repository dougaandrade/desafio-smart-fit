import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IunitsResponse } from '../Interfaces/IunitsResponse.interfaces';
import { Ilocation } from '../Interfaces/Ilocation.interface';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  readonly apiUrl =
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';
  private allUnitsSubject: BehaviorSubject<Ilocation[]> = new BehaviorSubject<Ilocation[]>([]);
  private allUnits$: Observable<Ilocation[]> = this.allUnitsSubject.asObservable();
  private filteredUnits: Ilocation[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<IunitsResponse>(this.apiUrl).subscribe((data) => {
      this.allUnitsSubject.next(data.locations);
      this.filteredUnits = data.locations;
    });
  }

  getAllUnits(): Observable<Ilocation[]> {
    return this.allUnits$;
  }
  getFilteredUnits(){
    return this.filteredUnits;
  }

  setFilteredUnits(value: Ilocation[]) {
    this.filteredUnits = value;

  }
}
