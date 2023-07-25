import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

const modules = [ButtonModule,
  TableModule];
@NgModule({
  declarations: [],
  imports: [
...modules
  ]
})
export class PrimeNgModule { }
