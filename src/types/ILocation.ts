export interface ILocation {
  id: string; 
  area_name: string;
  lat: string | null;
  lng: string | null;
}

export interface ILocationQueryParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: "ASC" | "DESC";
  area_name?: string;
  lat?: number;
  lng?: number;
}