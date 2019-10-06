import { Component, OnInit } from '@angular/core';
import { Simulate } from './model';
import { MainService } from '../service/main/main.service';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {

  simulation: Simulate = {
    number: '',
    x: 0,
    y: 0
  }

  constructor(protected service: MainService) { }

  ngOnInit() {
  }

  private submit(): void {
    this.service.setTransport(this.simulation).then(res => {
      alert(res);
    })
  }

}


