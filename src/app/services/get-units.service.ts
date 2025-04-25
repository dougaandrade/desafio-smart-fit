import { IunitsResponse } from './../Interfaces/IunitsResponse.interfaces';
import { Academia } from '../Interfaces/Iacademia.interface';
import { Ihour_index } from '../types/Ihour_index.types';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { shareReplay } from 'rxjs';

const API_URL =
  'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

const OPENING_HOURS: Readonly<
  Record<Ihour_index, { first: string; last: string }>
> = {
  morning: { first: '06h', last: '12h' },
  afternoon: { first: '12h', last: '18h' },
  night: { first: '18h', last: '23h' },
};

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  private readonly http = inject(HttpClient);
  private readonly source$ = this.http.get<IunitsResponse>(API_URL);

  private transformWeekday(weekday: number): string {
    const weekdays = ['Dom.', 'Seg. à Sex.', 'Sáb.'];
    return weekdays[weekday] || 'Seg. à Sex.';
  }

  private parseHours(hourStr: string): { open: number; close: number } {
    const [openHour, closeHour] = hourStr
      .split(' às ')
      .map((h) => +h.replace('h', ''));
    return { open: openHour, close: closeHour };
  }

  private filterAcademiasByHours(
    academias: Academia[],
    openHourFilter?: number,
    closeHourFilter?: number
  ): Academia[] {
    const todayWeekday: string = this.transformWeekday(new Date().getDay());

    return academias.filter(
      (unit) =>
        !unit.schedules ||
        unit.schedules.some((schedule) => {
          if (
            schedule.weekdays === todayWeekday &&
            schedule.hour !== 'Fechada'
          ) {
            const { open, close } = this.parseHours(schedule.hour);
            return (
              open <= (openHourFilter ?? open) &&
              close >= (closeHourFilter ?? close)
            );
          }
          return false;
        })
    );
  }

  private filterBySchedule(
    academias: Academia[],
    showClosed?: boolean,
    hourRange?: string
  ): Academia[] {
    if (showClosed) return academias.filter((acad) => !acad.opened);

    if (hourRange) {
      const { first: openHour, last: closeHour } =
        OPENING_HOURS[hourRange as Ihour_index] || {};
      if (openHour && closeHour) {
        return this.filterAcademiasByHours(
          academias,
          parseInt(openHour, 10),
          parseInt(closeHour, 10)
        );
      }
    }
    return academias;
  }

  private filterbyTitle(academias: Academia[], title: string): Academia[] {
    return academias.filter((value) => value.title.toLowerCase() === title);
  }

  async obterAcademias(
    openHour?: string,
    closeHour?: string,
    showClosed?: boolean,
    hour?: string,
    title?: string // Adicionado parâmetro para o título
  ) {
    try {
      const academias = await firstValueFrom(this.source$);

      const ufPattern = /, (\w{2})<\/p>/;
      const academiasComUF: Academia[] = academias.locations.map((item) => {
        const match = ufPattern.exec(item.content);
        const uf = match ? match[1] : '';
        return { ...item, uf };
      });

      let filteredAcademias = this.filterAcademiasByHours(
        academiasComUF,
        openHour ? parseInt(openHour, 10) : undefined,
        closeHour ? parseInt(closeHour, 10) : undefined
      );

      filteredAcademias = this.filterBySchedule(
        filteredAcademias,
        showClosed,
        hour
      );

      if (title) {
        filteredAcademias = this.filterbyTitle(
          filteredAcademias,
          title.toLowerCase()
        );
      }

      return filteredAcademias;
    } catch (error) {
      alert(`Erro ao buscar academias, ${error}`);
      return [];
    }
  }
}
