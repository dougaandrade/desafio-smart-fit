import { Ilocation } from "./Ilocation.interface";

export interface IunitsResponse {
  current_country_id: number;
  locations: Ilocation[],
}
