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
                balloonContent:  '<div class="balloon" style="border:4px solid #FFD204; padding: 20px 30px;line-height:1.2;margin:5px">' +
                '<p class="balloon__place" style="background-color:#FFD204; padding:6.5px 13px 6.5px 6.5px;">Парковочная зона:' + parking.number + '</p>' +
                '<p class="balloon__address">Адрес:' + parking.address + '</p>' +
                '<p class="balloon__work__time" style="background-color:#ffe9af; padding:2.6px 13px;">Время работы:' + parking.work_time + '</p>' +
                '<p class="balloon__number" style="">Количество мест:' + parking.current_places + '</p>' +
                '<p class="balloon__curr__number" style="">Количество текущих мест:' + parking.current_places + '</p>' +
                '<p class="balloon__cost" style="background-color:#ffe9af; padding:2.6px 13px; border-bottom: 1px solid #222;">Стоимость:' + parking.cost + '</p>' +
                '<div class="balloon__payment">Способ оплаты:</div>' + '<img src="../../assets/images/pay4.png" style="width:30px; height:30px; padding:5px; border:1px solid #FFD204;" alt=""/>' +
            '</div>'
                
                
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