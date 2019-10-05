import { Component, OnInit } from '@angular/core';
import ymaps from 'ymaps';
import { Converter } from '../service/converter/converter';
import { Parking, PARKINGS } from '../model/parking';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private ymaps: any;
  private map: any;

  private parkings: Parking[];

  private converter = new Converter();

  constructor() { }

  ngOnInit() {

    this.loadMap().then(res => {
      console.log(res);
      var myPlacemark = new this.ymaps.Placemark([43.241627, 76.898916]);
      this.map.geoObjects.add(myPlacemark);

      this.loadParkings();
      this.drawParkings();  
    });
  
  }

  async loadMap(): Promise<any> {
    this.ymaps = await ymaps.load();

    this.map = new this.ymaps.Map('map', {
      center: [43.241627, 76.898916],
      zoom: 13
    }, 
    {
      // Зададим ограниченную область прямоугольником, 
      // примерно описывающим Санкт-Петербург.
      restrictMapArea: [
          [43.17, 76.81],
          [43.32, 76.99]
      ]
  }
  );
    
    return Promise.resolve({result: 'ok'});
  }

  drawParkings(): void {
    for (let i = 0; i < this.parkings.length; ++i) {
      this.toParkingPlace(this.parkings[i]);
    }

  }

  loadParkings(): void {
    this.parkings = PARKINGS;
  }

  toParkingPlace(parking: Parking) {

    var geoObject = this.converter.toParkingPlace(parking); 

    this.map.geoObjects.add(geoObject);
}
}
