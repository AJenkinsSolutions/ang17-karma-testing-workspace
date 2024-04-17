import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // items: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] ; 

  headers: string[];

  constructor() {
    let currentDate = new Date();
    this.headers = Array.from({ length: 3 }, (_, i) => {
      let date = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
      return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
    });
  }

}
