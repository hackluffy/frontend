import ymaps from 'ymaps';
import { Parking } from 'src/app/model/parking';

export class Converter {

    private maps: any;

    constructor() {
        this.load().then(res => {
            console.log(res);
        });
    }

    async load(): Promise<any> {
        this.maps = await ymaps.load();

        return Promise.resolve({res: 'OK'});
    }

    toParkingPlace(parking: Parking) {

        return new this.maps.GeoObject({
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [parking.x0, parking.y0],
                    [parking.x1, parking.y1],
                    [parking.x2, parking.y2],
                    [parking.x3, parking.y3]
                ]],
                fillRule: "nonZero"
            },
            properties: {
                balloonContent: "Polygon"
            }
        }, 
        {
            fillColor: '#00FF00',
            strokeColor: '#0000FF',
            opacity: 0.5,
            strokeWidth: 5,
            strokeStyle: 'shortdash'
        });
    }
}