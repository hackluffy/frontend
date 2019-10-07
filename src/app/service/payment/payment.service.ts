import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import {CarData} from '../../model/cardata';

@Injectable({
    providedIn: 'root'
  })
  export class PaymentService extends BaseService {
  
    constructor(http: HttpClient) {
      super(http);
    }
    
    getCarData(s: string): Promise<CarData> {
      console.log({state_number: s});
      return this.post(`http://localhost:8000/getCarData/`, {state_number: s});
    }

    payment(aaa: number): Promise<any> {
      console.log(aaa);
      return this.delet(`http://localhost:8000/getCarData/`, {ida: aaa});
    }

}
  