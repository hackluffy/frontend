import ymaps from 'ymaps';
import { Parking } from 'src/app/model/parking';
import { Parkomat } from 'src/app/model/parkomat';

export class Converter {

    private ymaps: any;

    constructor() {
        this.load().then(res => {
            console.log(res);
        });
    }

    async load(): Promise<any> {
        this.ymaps = await ymaps.load();

        return Promise.resolve({res: 'OK'});
    }

    toParkingPlace(parking: Parking) {
        console.log(parking);

        return new this.ymaps.GeoObject({
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [parking.x1, parking.y1],
                    [parking.x2, parking.y2],
                    [parking.x3, parking.y3],
                    [parking.x4, parking.y4]
                ]],
                fillRule: "nonZero"
            },
            properties: {
                balloonContent: parking.address
            }
        }, 
        {
            fillColor: '#FFD104',
            strokeColor: '#f79120',
            opacity: 0.5,
            strokeWidth: 10,
            strokeStyle: 'shortdash'
        });
    }

    toParkomat(parkomat: Parkomat) {
        return new this.ymaps.Placemark([parkomat.x, parkomat.y],
        {
            iconLayout: 'default#image',
            iconImageHref: '../../',
            iconImageSize: [42, 42],
        })
    }
}