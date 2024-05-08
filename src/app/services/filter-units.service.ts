import { Injectable } from '@angular/core';
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

@Injectable({
  providedIn: 'root',
})
export class FilterUnitsService {
  constructor() {}

  transform_weekday(weekday: number) {
    switch (weekday) {
      case 0:
        return 'Dom.';
      case 6:
        return 'Sáb.';
      default:
        return 'Seg. à Sex.';
    }
  }

  filterUnits(unit: Ilocation, open_hour: string, close_hour: string) {
    if (!unit.schedules) return true;
    let open_hour_filter = parseInt(open_hour, 10);
    let close_hour_filter = parseInt(close_hour, 10);

    let todays_weekday = this.transform_weekday(new Date().getDay());

    for (let i = 0; i < unit.schedules.length; i++) {
      let schedule_hour = unit.schedules[i].hour;
      let schedule_weekday = unit.schedules[i].weekdays;

      if ((todays_weekday = schedule_weekday)) {
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
          else return false;
        }
      }
    }
    return false;
  }
  filter(results: Ilocation[], showClosed: boolean, hour: string) {
     let intermediateResults = results;

     if (showClosed) {
       intermediateResults = results.filter(
         (location) => location.opened === true
       );
     }

     if (hour) {
       const OPEN_HOUR =
         OPPENING_HOURS[hour as Ihour_index].first;
       const CLOSE_HOUR =
         OPPENING_HOURS[hour as Ihour_index].last;
       return intermediateResults.filter((location) =>
         this.filterUnits(location, OPEN_HOUR, CLOSE_HOUR)
       );
     } else {
       return intermediateResults;
     }
  }
}
