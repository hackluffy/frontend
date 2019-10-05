import { Component, OnInit } from '@angular/core';
import ymaps from 'ymaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  ymaps: any;
  map: any;

  constructor() { }

  ngOnInit() {

    this.loadMap();
    
    // this.loadMap();
    // setTimeout(this.createObject, 7000);
  
  }

  async loadMap(): Promise<any> {
    const maps = await ymaps.load();

    this.map = new maps.Map('map', {
      center: [43.241627, 76.898916],
      zoom: 13
    });

    var myPlacemark = new maps.Placemark([43.241627, 76.898916]);
    this.map.geoObjects.add(myPlacemark);

    var myGeoObject = new maps.GeoObject({
      geometry: {
          type: "LineString",
          coordinates: [
              [43.241, 76.898916],
              [43.241, 77.1]
          ]
      },
      properties:{
          hintContent: "I'm a geo object",
          balloonContent: "You can drag me"
      }},{
        strokeWidth: 5
      }
    );

    this.map.geoObjects.add(myGeoObject);

    var myGeoObject1 = new maps.GeoObject({
      geometry: {
          type: "Polygon",
          coordinates: [
              [
                  [43.241, 76.898916],
                  [43.241, 76.8982],
                  [43.245, 76.8983],
                  [43.242, 76.891],
                  [43.241, 76.881]
              ]
          ],
          fillRule: "nonZero"
      },
      properties:{
          balloonContent: "Polygon"
      }
  }, {
      /**
       * Describing the geo object options.
       *  Fill color.
       */
      fillColor: '#00FF00',
      // Stroke color.
      strokeColor: '#0000FF',
      // The overall transparency (for both fill and stroke).
      opacity: 0.5,
      // The stroke width.
      strokeWidth: 5,
      // The stroke style.
      strokeStyle: 'shortdash'
  });

  this.map.geoObjects.add(myGeoObject1);


    // ymaps.load('https://api-maps.yandex.ru/2.1/?apikey=25a4099a-7dfb-4332-b674-60ee3db0836f&lang=ru_RU')
    // .then(maps => {

    //   console.log(ymaps);
    //   this.ymaps = maps;

    //   console.log(this.ymaps);

    //   this.map = new maps.Map('map', {
    //     center: [43.241627, 76.898916],
    //     zoom: 13
    //   });

    //   // this.createObject();

    // })
    // .catch(error => console.log('Failed to load Yandex Maps', error));

    

  }
  createObject(): void {
    
    var myPlacemark = ymaps.Placemark([43.2, 76.8]);

    this.map.geoObjects.add(myPlacemark);

    console.log('a');

  }
}
