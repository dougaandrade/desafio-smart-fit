import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {  map } from 'rxjs';
import { IunitsResponse } from '../Interfaces/IunitsResponse.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  readonly apiUrl =
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  private readonly source$ = inject(HttpClient).get<IunitsResponse>(this.apiUrl);

  obterDados(filtro?: string) {
    let result = this.source$;

    if (filtro) {
      const filtroNormalizado = filtro.toLocaleLowerCase();
      result = result.pipe(
        map((value) => {
          const locations = value.locations.filter((loc) => loc.content.toLocaleLowerCase().includes(filtroNormalizado))

          return {
            ...value,
            locations
          }
        })
      )
    }

    return result;
  }
  //todo criar os metodos para os gets
}
