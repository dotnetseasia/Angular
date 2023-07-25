import { Component } from '@angular/core';
interface City {
  name: string;
  code: string;
}
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'ms-operating-unit-type',
  templateUrl: './operating-unit-type.component.html',
  styleUrls: ['./operating-unit-type.component.scss']
})
export class OperatingUnitTypeComponent {
  value!: string;
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
          { name: 'Select', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];
  }
}
