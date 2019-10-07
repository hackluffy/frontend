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

    paymentClick(){
        document.getElementById("myModal").style.display = 'block';
    }

    async load(): Promise<any> {
        this.ymaps = await ymaps.load();

        return Promise.resolve({res: 'OK'});
    }

    toParkingPlace(parking: Parking) {
        console.log(parking);

        

        /* считаем свободные места */
        const freePlaces = parking.current_places - parking.busy_places;
        let fillColoR;
        let strokeColoR;


        let ratio = freePlaces / parking.current_places;
        if (ratio >= 0.8) {
            fillColoR = '#00F75B';
            strokeColoR = '#06C64D';
        }
        else if (ratio >= 0.2) {
            fillColoR = '#FFD104';
            strokeColoR = '#f79120';
        }
        else {
            fillColoR = '#FF4F4F';
            strokeColoR = '#D70000';
        }

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
                balloonContent: '<div class="balloon" style="border:4px solid #FFD204;  padding:6.5px 13px 6.5px 6.5px;line-height:1.2;margin:5px">' +
                '<p class="balloon__place" style="background-color:#FFD204; padding:6.5px 13px 6.5px 6.5px;">Парковочная зона:' + parking.number + '</p>' +
                '<p class="balloon__address" style="padding:6.5px 13px 6.5px 6.5px;">Адрес:' + parking.address + '</p>' +
                '<p class="balloon__work__time" style="background-color:#ffe9af;  padding:6.5px 13px 6.5px 6.5px;">Время работы:' + parking.work_time + '</p>' +
                '<p class="balloon__number" style=" padding:6.5px 13px 6.5px 6.5px;">Количество мест:' + parking.current_places + '</p>' +
                '<p class="balloon__curr__number" style=" padding:6.5px 13px 6.5px 6.5px;">Количество текущих мест:' + freePlaces + '</p>' +
                '<p class="balloon__cost" style="background-color:#ffe9af;  padding:6.5px 13px 6.5px 6.5px; border-bottom: 1px solid #222;">Стоимость:' + parking.cost + '</p>' +
                '<div class="balloon__payment" style=" padding:6.5px 13px 6.5px 6.5px;>Способ оплаты:</div>' + '<img src="../../assets/images/pay4.png" style="width:30px; height:30px; padding:5px; border:1px solid #FFD204;" alt=""/>' +
                '<a href="/payment">Pay</a>' + 
            '</div>'
                
                
            }
        }, 
        {
            fillColor: fillColoR,
            strokeColor: strokeColoR,
            opacity: 0.5,
            strokeWidth: 8,
            strokeStyle: 'shortdash'
        });
    }

    toParkomat(parkomat: Parkomat) {
        return new this.ymaps.Placemark([parkomat.x, parkomat.y],
        {
            balloonContentHeader: 'Паркомат: ' + parkomat.number,
            balloonContent: 'Адрес: ' + parkomat.address,
        },
        {
            iconLayout: 'default#image',
            iconImageHref: '../../assets/images/item.png',
            iconImageSize: [30, 42],
        })
    }
}