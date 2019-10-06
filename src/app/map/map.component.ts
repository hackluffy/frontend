import { Component, OnInit, Input } from '@angular/core';
import { Converter } from '../service/converter/converter';
import { Parking} from '../model/parking';
import { Parkomat, PARKOMATS } from '../model/parkomat';
import { MainService } from '../service/main/main.service';
import ymaps from 'ymaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  
  /* yandex maps elements */
  private ymaps: any;
  public map: any;

  /* objects */
  private parkings: Parking[] = [];
  private parkomats: Parkomat[] = [];

  /* additional class */
  private converter = new Converter();

  constructor(protected service: MainService) { }

  ngOnInit() {

    /* when map load */
    this.loadMap().then(res => {

      /* parking places */
      this.service.getParkingPlaces().then(res => {     
        console.log(res);   
        this.parkings = res;

        this.parkings.forEach(element => { this.toParkingPlace(element);});
      });

      /* parkomats */
      this.service.getParkomats().then(res => {
        this.parkomats = res;

        this.parkomats.forEach(element => { this.toParkomats(element);});
      });
    });
  
  }

  /* load yandex maps */
  async loadMap(): Promise<any> {
    this.ymaps = await ymaps.load();

    /* set center and bounds of map */
    this.map = new this.ymaps.Map('map', {
      center: [43.241627, 76.898916],
      zoom: 13
    }, 
    {
      restrictMapArea: [
          [43.17, 76.81],
          [43.32, 76.99]
      ]
  }
  );
    
    return Promise.resolve({result: 'ok'});
  }

  toParkingPlace(parking: Parking): void {
    var geoObject = this.converter.toParkingPlace(parking); 

    this.map.geoObjects.add(geoObject);
  }

  toParkomats(parkomat: Parkomat): void {
    var geoObject = this.converter.toParkomat(parkomat); 

    this.map.geoObjects.add(geoObject);
  }
}
