import { Component, OnInit } from '@angular/core';
import {CarData} from '../model/cardata';
import {Parking} from '../model/parking';
import {PaymentService} from '../service/payment/payment.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})

export class PaymentComponent implements OnInit {

  state_number: string = '';
  sum: number;

  constructor(protected service: PaymentService) { }
  
  car: CarData;
  parking: Parking;
  a: string = '';

  ngOnInit() {
  }
  
  pay(){
      let dt = new Date(this.car.time_count).getMilliseconds();
      let a = this.car.time_count.toString();
      let current_time = new Date().getMilliseconds();
      let diff;

      if(dt < current_time){
        diff = current_time - dt;
      }else{
        diff = dt - current_time;
      }      

      let sum = Math.ceil(diff/1000/3600) * this.car.parking_place.cost;
      return sum;
  }
  

  
  getCarData(){

    if (this.a === '') {
      this.service.getCarData(this.state_number).then(res => {
        console.log(res);
        this.car = res;
  
        this.a = this.car.time_count.toString().split('T')[1].split('.')[0];
  
        this.sum = this.pay();
  
      });
    }
    else {
      // console.log(this.car);
      let that = this;
      
      let myTime = setTimeout(function(){
      
        that.service.payment(that.car.id).then(res => {
          alert("Успешно удалено");
          that.getCarData();
        })

      },5000)
    }
    
  }
}
