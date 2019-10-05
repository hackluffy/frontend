export const PARKINGS: Parking[] = [
    {
        id: 1,
        number: 111,
        address: "Potapenko 23",
        cost: 100.0,
        current_places: 32,
        big_parking: 1,
        work_time: "8:00-19:00",
        x0: 43.241,
        y0: 76.898916,
        x1: 43.241,
        y1: 76.8982,
        x2: 43.245,
        y2: 76.8983,
        x3: 43.242,
        y3: 76.881,
    }
]

export interface Parking {
  id: number;
  number: number;
  address: string;
  cost: number;
  current_places: number;
  big_parking: number;
  work_time: string;
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x3: number;
  y3: number;
}

