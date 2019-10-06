import {Parking} from './parking';

export interface CarData{
    id:number,
    time_count:Date,
    state_number: string,
    parking_place: Parking
}