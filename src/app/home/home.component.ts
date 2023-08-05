import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { DetailComponent } from '../detail/detail.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ListComponent,DetailComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
