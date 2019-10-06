// export const PARKINGS: Parking[] = [
//     {
//         id: 1,
//         number: 10,
//         address: "ул. Сатпаева",
//         cost: 120.0,
//         current_places: 102,
//         big_parking: {
//           id: 1,
//           number: 1
//         },
//         work_time: "8:00-19:00",
//         x1: 43.238285,
//         y1: 76.942136,
//         x2: 43.238254,
//         y2: 76.944198,
//         x3: 43.238526,
//         y3: 76.944209,
//         x4: 43.238393,
//         y4: 76.942181
//     },
//     {
//         id: 7,
//         number: 16,
//         address: "ул. Сатпаева",
//         cost: 120.0,
//         current_places: 10,
//         busy_places: 2,
//         big_parking: {
//           id: 1,
//           number: 1
//         },
//         work_time: "8:00-19:00",
//         x1: 43.239031, 
//         y1: 76.949491,
//         x2: 43.238970,
//         y2: 76.949507,
//         x3: 43.239066, 
//         y3: 76.950912,
//         x4: 43.239129, 
//         y4: 76.950883
//     },
//     {
//         id: 3,
//         number: 12,
//         address: "ул. Сатпаева",
//         cost: 120.0,
//         current_places: 92,
//         big_parking: {
//           id: 1,
//           number: 1
//         },
//         work_time: "8:00-19:00",
//         x1: 43.238368,
//         y1: 76.948366,
//         x2: 43.238209,
//         y2: 76.948586,
//         x3: 43.238068,
//         y3: 76.947068,
//         x4: 43.238260,
//         y4: 76.947183
//     },
//     {
//         id: 4,
//         number: 13,
//         address: "Акимат",
//         cost: 120.0,
//         current_places: 104,
//         big_parking: {
//           id: 1,
//           number: 1
//         },
//         work_time: "8:00-19:00",
//         x1: 43.236874,
//         y1: 76.943318,
//         x2: 43.236770,
//         y2: 76.943305,
//         x3: 43.237101,
//         y3: 76.948131,
//         x4: 43.237229,
//         y4: 76.948084
//     },
//     {
//         id: 5,
//         number: 14,
//         address: "ул. Сатпаева",
//         cost: 120.0,
//         current_places: 86,
//         big_parking: {
//           id: 1,
//           number: 1
//         },
//         work_time: "8:00-19:00",
//         x1: 43.238726,
//         y1: 76.949509,
//         x2: 43.238661,
//         y2: 76.949520,
//         x3: 43.239287,
//         y3: 76.957098,
//         x4: 43.239358,
//         y4: 76.957122
//     },
//     {
//         id: 6,
//         number: 15,
//         address: "ул. Сатпаева",
//         cost: 120.0,
//         current_places: 51,
//         big_parking: {
//           id: 1,
//           number: 1
//         },
//         work_time: "8:00-19:00",
//         x1: 43.239098,
//         y1: 76.950965,
//         x2: 43.239024,
//         y2: 76.950978,
//         x3: 43.239426,
//         y3: 76.957005,
//         x4: 43.239521,
//         y4: 76.957050
//     }
// ]

export interface Parking {
  id: number;
  number: number;
  address: string;
  cost: number;
  current_places: number;
  busy_places: number;
  big_parking: BigParking;
  work_time: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x3: number;
  y3: number;
  x4: number;
  y4: number;
}

export interface BigParking {
    id: number;
    number: number;
}

