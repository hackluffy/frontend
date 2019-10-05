export const PARKOMATS: Parkomat[] = [
    {
        id: 1,
        number: 10,
        address: "площадь Республики, 15",
        x: 43.238531,
        y: 76.943644
    },
    {
        id: 2,
        number: 11,
        address: "площадь Республики",
        x: 43.238743,
        y: 76.947204
    },
    {
        id: 3,
        number: 12,
        address: "площадь Республики",
        x: 43.238081,
        y: 76.947188
    },
    {
        id: 4,
        number: 13,
        address: "Бостандыкский район",
        x: 43.236978,
        y: 76.945447
    },
    {
        id: 5,
        number: 14,
        address: "улица Сатпаева",
        x: 43.238859,
        y: 76.952035
    },
    {
        id: 6,
        number: 15,
        address: "улица Сатпаева",
        x: 43.239409,
        y: 76.955427
    },
]

export interface Parkomat {
    id: number;
    number: number
    address: string;
    x: number;
    y: number;
}