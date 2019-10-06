import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Parking } from 'src/app/model/parking';
import { Parkomat } from 'src/app/model/parkomat';
import { Simulate } from 'src/app/simulation/model';

@Injectable({
  providedIn: 'root'
})
export class MainService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getParkingPlaces(): Promise<Parking[]> {
    return this.get(`http://localhost:8000/getParkings/`, {});
  }

  getParkomats(): Promise<Parkomat[]> {
    return this.get(`http://localhost:8000/getParkomats/`, {});
  }

  setTransport(simulate: Simulate): Promise<any> {
    return this.post(`http://localhost:8000/setNum/`, {
      state_number: simulate.number,
      x: +simulate.x,
      y: +simulate.y
    });
  }
}
