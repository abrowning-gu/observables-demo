import { Injectable,inject } from '@angular/core';
import { Car } from '../car';
import { HttpClient } from '@angular/common/http';
import { Observable ,of ,from,BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 cars:Car[] =[];
private _currentcar = new BehaviorSubject<Car>(<Car>{})
readonly currentcar$ = this._currentcar.asObservable();
private http = inject(HttpClient);


public getAllCars(){

  //http.get returns an observable. A stringified JSON object is what we are loking for
  //from the server.
  return this.http.get<string>('http://localhost:3000/api/cars', {});
}

setcurrentcar(car:Car){
    this._currentcar.next(car); 
  }

}

