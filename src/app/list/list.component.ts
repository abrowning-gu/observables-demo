import { Component,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Car } from '../car';
import { Observable,BehaviorSubject } from 'rxjs'; 

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
 
 private dataservice = inject(DataService);

  cars$ = new Observable<Car[]>();

  ngOnInit(): void {
    this.cars$ = this.dataservice.getAllCars();
  }

  onSelect(car:Car){
    this.dataservice.setcurrentcar(car);
  }
}
