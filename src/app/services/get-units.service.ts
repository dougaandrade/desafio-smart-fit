import { IunitsResponse } from './../Interfaces/IunitsResponse.interfaces';
import { Academia } from '../Interfaces/Iacademia.interface';
import { Ihour_index } from '../types/Ihour_index.types';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

const API_URL =
  'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

const OPENING_HOURS = {
  morning: {
    first: '06h',
    last: '12h',
  },
  afternoon: {
    first: '12h',
    last: '18h',
  },
  night: {
    first: '18h',
    last: '23h',
  },
};

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  private readonly source$ = inject(HttpClient).get<IunitsResponse>(API_URL);

  private transformWeekday(weekday: number): string {
    const weekdays = [
      'Dom.',
      'Seg. à Sex.',
      'Seg. à Sex.',
      'Seg. à Sex.',
      'Seg. à Sex.',
      'Seg. à Sex.',
      'Sáb.',
    ];
    return weekdays[weekday] || 'Seg. à Sex.';
  }

  private parseHours(hourStr: string): { open: number; close: number } {
    const [openHour, closeHour] = hourStr
      .split(' às ')
      .map((h) => parseInt(h.replace('h', ''), 10));
    return { open: openHour, close: closeHour };
  }

  private filterAcademias(
    academias: Academia[],
    startHour?: string,
    endHour?: string
  ): Academia[] {
    if (!startHour || !endHour) return academias;
    const openHourFilter = parseInt(startHour, 10);
    const closeHourFilter = parseInt(endHour, 10);
    const todayWeekday: string = this.transformWeekday(new Date().getDay());

    return academias.filter((unit) => {
      if (!unit.schedules) {
        return true;
      }

      return unit.schedules.some((schedule) => {
        if (schedule.weekdays === todayWeekday && schedule.hour !== 'Fechada') {
          const { open, close } = this.parseHours(schedule.hour);
          return open <= openHourFilter && close >= closeHourFilter;
        }
        return false;
      });
    });
  }

  private filterBySchedule(
    academias: Academia[],
    showClosed?: boolean,
    hour?: string
  ): Academia[] {
    let filteredAcademias = academias || [];

    if (showClosed) {
      filteredAcademias = filteredAcademias.filter((acad) => !acad.opened);
    } else if (hour) {
      const openHour = OPENING_HOURS[hour as Ihour_index].first;
      const closeHour = OPENING_HOURS[hour as Ihour_index].last;
      if (openHour && closeHour) {
        filteredAcademias = this.filterAcademias(
          filteredAcademias,
          openHour,
          closeHour
        );
      }
    }
    return filteredAcademias;
  }

  async obterAcademias(
    openHour?: string,
    closeHour?: string,
    showClosed?: boolean,
    hour?: string
  ): Promise<Academia[]> {
    const academias = await firstValueFrom(this.source$);

    const ufPattern = /, (\w{2})<\/p>/;
    const academiasComUF: Academia[] = academias.locations.map((item) => {
      const match = ufPattern.exec(item.content);
      const uf = match ? match[1] : '';
      return { ...item, uf };
    });

    let filteredAcademias = this.filterAcademias(
      academiasComUF,
      openHour,
      closeHour
    );
    filteredAcademias = this.filterBySchedule(
      filteredAcademias,
      showClosed,
      hour
    );

    return filteredAcademias;
  }
}
