import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IunitsResponse } from '../Interfaces/IunitsResponse.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  readonly apiUrl =
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  constructor(private httpClient: HttpClient) { }

  getAllUnits(): Observable<IunitsResponse> {
    return this.httpClient.get<IunitsResponse>(this.apiUrl);
  }
}
