import { Component } from '@angular/core';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'ms-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent {
  first: number = 0;

  rows: number = 10;

  onPageChange(event: PageEvent) {
      this.first = event.first;
      this.rows = event.rows;
  }
  cities: City[] | undefined;

  selectedCity: City | undefined;

  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];
  }
}
// export class PaginatorBasicDemo {
//   first: number = 0;

//   rows: number = 10;

//   onPageChange(event: PageEvent) {
//       this.first = event.first;
//       this.rows = event.rows;
//   }

  
// }




