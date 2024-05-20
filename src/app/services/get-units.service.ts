import { IunitsResponse } from './../Interfaces/IunitsResponse.interfaces';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, map, Observable } from 'rxjs';
import { Ilocation } from '../Interfaces/Ilocation.interface';
import { Ihour_index } from '../Interfaces/Ihour_index.interface';

const OPPENING_HOURS = {
  morning: {
    first: '06h',
    last: '12h',
  },
  afternoon: {
    first: '12h01',
    last: '18h',
  },
  night: {
    first: '18h01',
    last: '23h',
  },
};
const API_APP =
  'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  private readonly source$ = inject(HttpClient).get<IunitsResponse>(API_APP);

  //todo criar os metodos para os gets

  private transform_weekday(weekday: number) {
    switch (weekday) {
      case 0:
        return 'Dom.';
      case 6:
        return 'Sáb.';
      default:
        return 'Seg. à Sex.';
    }
  }
  private filtrarAcademias(
    units: Ilocation[],
    open_hour?: string,
    close_hour?: string
  ): Ilocation[] {
    if (!open_hour || !close_hour) return units;
    let open_hour_filter = parseInt(open_hour, 10);
    let close_hour_filter = parseInt(close_hour, 10);
    ///tentar consertar o metodo para reconhecer o schedules e o closehour
    let todays_weekday = this.transform_weekday(new Date().getDate());
    return units.filter((unit) => {
      if (!unit.schedules) return true;

      for (let shedule of unit.schedules) {
        let schedule_hour = shedule.hour;
        let schedule_weekday = shedule.weekdays;

        if (schedule_weekday.includes(todays_weekday)) {
          if (schedule_hour !== 'Fechada') {
            let [unit_open_hour, unit_close_hour] = schedule_hour.split(' às');
            let unit_open_hour_int = parseInt(
              unit_open_hour.replace('h', ''),
              10
            );
            let unit_close_hour_int = parseInt(
              unit_close_hour.replace('h', ''),
              10
            );
            if (
              unit_open_hour_int <= open_hour_filter &&
              unit_close_hour_int >= close_hour_filter
            ) {
              return true;
            }
          }
        }
      }
      return false;
    });
  }
  private horarioLocais(
    units: Ilocation[],
    showClosed?: boolean,
    hour?: string
  ) {
    let oppening = units;

    if (!showClosed) {
      oppening = oppening.filter((locais) => locais.opened === true);
    }
    if (hour) {
      const OPEN_HOUR = OPPENING_HOURS[hour as Ihour_index].first;
      const CLOSE_HOUR = OPPENING_HOURS[hour as Ihour_index].last;
      oppening = this.filtrarAcademias(oppening, OPEN_HOUR, CLOSE_HOUR);
    }
    return oppening;
  }

  async obterAcademias(
    open_hour?: string,
    close_hour?: string,
    showClosed?: boolean,
    hour?: string
  ) {
    // obter as academias do BD
    const academias = await firstValueFrom(this.source$);

    // filtrar os resultados, se necessario
    let academiasfiltradas = this.filtrarAcademias(
      academias.locations,
      open_hour,
      close_hour
    );
    academiasfiltradas = this.horarioLocais(
      academiasfiltradas,
      showClosed,
      hour
    );

    // retornar os resultados finais
    return academiasfiltradas;
  }
}
