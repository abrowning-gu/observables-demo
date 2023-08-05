import { Component ,OnInit,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  car:Car = <Car>{};

  private dataservice = inject(DataService);

  ngOnInit(): void {
      this.dataservice.currentcar$.subscribe((data)=>{
         this.car = data;
       })
  }
}
