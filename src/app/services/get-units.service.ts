import { IunitsResponse } from './../Interfaces/IunitsResponse.interfaces';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Ilocation } from '../Interfaces/Ilocation.interface';
import { Ihour_index } from '../Interfaces/Ihour_index.interface';

interface Academia extends Ilocation {
  uf: string;
}

const OPPENING_HOURS = {
  morning: {
    first: '06',
    last: '12',
  },
  afternoon: {
    first: '12',
    last: '18',
  },
  night: {
    first: '18',
    last: '23',
  },
};
const API_APP =
  'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  private readonly source$ = inject(HttpClient).get<IunitsResponse>(API_APP);

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
    academias: Academia[],
    open_hour?: string,
    close_hour?: string
  ): Academia[] {
    if (!open_hour || !close_hour) return academias;
    let open_hour_filter = parseInt(open_hour, 10);
    let close_hour_filter = parseInt(close_hour, 10);
    let todays_weekday = this.transform_weekday(new Date().getDay());

    return academias.filter((unit) => {
      if (!unit.schedules) return true;

      for (let schedule of unit.schedules) {
        let schedule_hour = schedule.hour;
        let schedule_weekday = schedule.weekdays;

        if (schedule_weekday === todays_weekday) {
          if (schedule_hour !== 'Fechada') {
            let [unit_open_hour, unit_close_hour] = schedule_hour.split(' às ');
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
            )
              return true;
          }
        }
      }
      return false;
    });
  }

  private horarioLocais(
    academias: Academia[],
    showClosed?: boolean,
    hour?: string
  ): Academia[] {
    let oppening = academias;

    if (showClosed) {
      oppening = oppening.filter((locais) => locais.opened === false);
    }

    if (hour) {
      const OPEN_HOUR = OPPENING_HOURS[hour as Ihour_index].first;
      const CLOSE_HOUR = OPPENING_HOURS[hour as Ihour_index].last;
      oppening = this.filtrarAcademias(oppening, OPEN_HOUR, CLOSE_HOUR);
    }

    if (oppening.length == 0) {
      alert('Sem Resultados');
      location.reload();
    }
    return oppening;
  }

  async obterAcademias(
    open_hour?: string,
    close_hour?: string,
    showClosed?: boolean,
    hour?: string
  ) {
    const academias = await firstValueFrom(this.source$);

    const ufPattern = /, (\w{2})<\/p>/;
    const academiasComUF: Academia[] = academias.locations.map((item) => {
      const match = ufPattern.exec(item.content);
      const uf = match ? match[1] : '';
      return { ...item, uf };
    });

    let academiasfiltradas = this.filtrarAcademias(
      academiasComUF,
      open_hour,
      close_hour
    );
    academiasfiltradas = this.horarioLocais(academiasComUF, showClosed, hour);
    return academiasfiltradas;
  }
}
