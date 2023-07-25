import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LeasesService } from '../leases.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver'

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
  selector: 'ms-guest-card',
  templateUrl: './guest-card.component.html',
  styleUrls: ['./guest-card.component.scss']
})
export class GuestCardComponent {
  @ViewChild('TABLE') table: ElementRef;
  GuestCardForm: FormGroup
  exportActive:boolean = false;
  constructor(private leasesService: LeasesService, private fb: FormBuilder) { }
  LeasingAgents: any = [];
  @Input() results = [];
  value!: string;
  first: number = 0;

  rows: number = 10;

  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }
  Status = [
    { name: 'Active', code: '1' },
    { name: 'InActive', code: '0' },
  ];

  selectedCity: City | undefined;

  ngOnInit() {
    this.GuestCardForm = this.fb.group({
      sortColumnName: "strCreatedDate",
      startRow: 100,
      pageSize: 101,
      searchText: "",
      sortOrderBy: "desc",
      searchColumnName: "",
      searchOperator: "",
      keywordSearch: "",
      guestCardStatus: "1",
      prospectusName: "",
      phoneNumber: "",
      email: "",
      propertyID_AG: "",
      buildingID_AG: "",
      unit: "",
      fromDate: "",
      toDate: "",
      leasingAgent: "",
      expectedMoveInDate: "",
      isRecord: 1
    });
    this.getLeasingAgents();
    this.search();
  }
  getLeasingAgents() {
    this.leasesService.getleasesAgents().subscribe((results: any) => this.LeasingAgents = results);
  }
  search() {
    let input = this.GuestCardForm.value;
    this.results = []
    this.leasesService.getGuestCardGrid(input).subscribe((results: any) => {
      if (!results || (results && results.length == 0)) {
      //  this.toastr.info("No Record Found");
      }
      else
        this.results = results;
     
    },);
  }
  export()
  {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.results);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, "results");
    });   
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  let EXCEL_EXTENSION = ".xlsx";
  const data: Blob = new Blob([buffer], {
    type: EXCEL_TYPE
  });
  FileSaver.saveAs(
    data,
    fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
  );
  }
}
