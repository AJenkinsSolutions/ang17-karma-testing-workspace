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
  endDate;
  startDate;
  headers: string[] = [];

  constructor() {
    this.startDate = new Date(localStorage.getItem('startDate') || new Date(2020, 0).toISOString());
    this.endDate = new Date(localStorage.getItem('endDate') || new Date(2021, 11).toISOString());
    this.generateHeaders();
  }

  generateHeaders(): void {
    const startYear = this.startDate.getFullYear();
    const endYear = this.endDate.getFullYear();

    for (let year = startYear; year <= endYear; year++) {
      for (let month = 0; month < 12; month++) {
        const date = new Date(year, month);
        // Check if the date is within the range
        if (date >= this.startDate && date <= this.endDate) {
          this.headers.push(`${this.getMonthName(month)} ${year}`);
        }
      }
    }
    console.log(this.headers)
  }

  getMonthName(monthIndex: number): string {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    return monthNames[monthIndex];
  }

 

}
