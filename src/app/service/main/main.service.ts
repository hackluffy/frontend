import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Parking } from 'src/app/model/parking';
import { Parkomat } from 'src/app/model/parkomat';

@Injectable({
  providedIn: 'root'
})
export class MainService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getParkingPlaces(): Promise<Parking[]> {
    return this.get(`http://192.168.43.76:8000/getParkings/`, {});
  }

  getParkomats(): Promise<Parkomat[]> {
    return this.get(`http://192.168.43.76:8000/getParkomats/`, {});
  }
}
