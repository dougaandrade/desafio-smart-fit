import { Ischedules } from "./Ischedules.interface";

export interface Ilocation {
  id: number,
  title: string,
  content: string,
  opened: boolean,
  mask: string,
  towel: string,
  fountain: string,
  locker_room: string,
  schedules:Ischedules[]
}
