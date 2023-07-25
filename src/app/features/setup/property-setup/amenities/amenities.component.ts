import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/service/service.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { toNumber } from 'lodash';

import * as FileSaver from 'file-saver';

interface City {
  name: number;

}
interface User {
  status: string;
  chargeCode: string;
  sortColumnName: string;
  sortOrderBy: string;
}

interface getAmenity {
  startRow: number;
  sortOrderBy: string;
  sortColumnName: string;
  pageSize: number;
  amenityCode: string;
  amenityName: string;
  description: string;
  amenityRentType: number;
  chargeCode: string;
  status: number;
  isRecord: number;
}

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'ms-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent {
  myForm: FormGroup;
  value!: string;
  myData: any[];
  first: number = 0;
  isFormVisible = true;
  isTableVisible = false;
  rows: number = 10;
  chargeCode: any[];
  apiCallAllowed: false;
  isDropdownDisabled: boolean;
  amenityRentType: string = 'firstDropDown';
  amenityChargeCodeId: string = 'amenityChargeCodeId';
  showConfirmation: boolean = false;
 

  get_amenity: getAmenity = {
    startRow: 11,
    sortOrderBy: "desc",
    sortColumnName: "ModifiedDate",
    pageSize: 10,
    amenityCode: "",
    amenityName: "",
    description: "",
    amenityRentType: 1,
    chargeCode: "",
    status: 0,
    isRecord: 1
  }


  get_amenity1: getAmenity = {
    startRow: 11,
    sortOrderBy: "desc",
    sortColumnName: "ModifiedDate",
    pageSize: 10,
    amenityCode: "",
    amenityName: "",
    description: "",
    amenityRentType: 1,
    chargeCode: "",
    status: -1,
    isRecord: 1
  }

  constructor(private dataService: DataService, private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      amenityCode: ['', Validators.required],
      amenityName: ['', Validators.required],
      description: ['', Validators.required],
      amenityRentType: ['', Validators.required],
      chargeCode: [''],
      [this.amenityChargeCodeId]: this.formBuilder.control(0),
      isStatus: [0],
      status: [false]
    })
  }

  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }
  cities: City[] | undefined;

  selectedCity: City | undefined;


  ngOnInit() {
    this.cities = [
      { name: 1 },
      { name: 2 },
    ];
    this.dataService.GetAmenity(this.get_amenity).subscribe(Response => {
      //console.log('your data is ', Response);
      this.myData = Response;
      this.isDropdownDisabled = true
    })

  }
  RentType: any[] = [
    { name: 'Non-Rentable Amenity', value: 1 },
    { name: 'Rentable Amenity', value: 0 }
  ]
  toggleForm() {
    this.isFormVisible = false;
    this.isTableVisible = true;
  }

  Yes() {
    this.isFormVisible = true;
    this.isTableVisible = false;
    window.location.reload();
  }
  //Popup open on click
  noCancel() {
    this.showConfirmation = false;
  }
  //Popup cancel occur on click
  Cancelbutton() {
    this.showConfirmation = true;
  }
  // Searching the data filled by the user---------------------------------

  Search(myForm) {
    debugger
    // if (this.myForm.value.status == false)
    //   this.myForm.get('status').setValue(0);
    // else this.myForm.get('status').setValue(1);

    const formData = this.convertFormDataToJson(this.myForm);
    this.get_amenity1.amenityCode = formData.amenityCode;
    this.get_amenity1.amenityName = formData.amenityName;
    this.get_amenity1.description = formData.description;
    this.get_amenity1.amenityRentType = formData.amenityRentType;
    // if(this.myForm.value.amenityChargeCodeId = undefined) {
    //   this.myForm.value.amenityChargeCodeId = 0;
    // }
    this.get_amenity1.chargeCode = formData.chargeCode;
    this.get_amenity1.status = toNumber(formData.status);

    this.dataService.GetAmenity(this.get_amenity1).subscribe((Response) => {
      console.log(Response);
      this.myData = Response;

    })
  }

  // submiting the data filled by the user---------------------------------
  onSubmit() {
    debugger
    this.isFormVisible = true;
    this.isTableVisible = false;
    console.log(this.chargeCode);
    if (this.myForm.value.status == false)
      this.myForm.get('status').setValue(true);
    else this.myForm.get('status').setValue(false);
    console.log(this.myForm.value.status);
    if (this.myForm.valid) {
      if(this.myForm.value.amenityRentType == 1){
     
        this.myForm.value.amenityChargeCodeId = 0;
        this.isDropdownDisabled = true;
      }
      const formData = this.convertFormDataToJson(this.myForm);

      this.dataService.InsertAmenity(formData).subscribe(response => {

        console.log(this.myForm.value);
      }, error => { console.log('Error:', error.error); })
      window.location.reload();
    } else {
      console.log(Error);
    }

  }

  // this.dataService.InsertAmenity(this.myForm).subscribe((response) => {
  //   console.log("User is successfully Insertd", Response);
  // },
  //   error => {
  //     console.log("error in code ", error)
  //   })

  // onCheckboxChange() {
  //   // Handle the logic when the checkbox state changes
  //   const isChecked = this.myForm.get('status').setValue('0');
  //   console.log('Checkbox value:', isChecked);
  // }

  getRentType(RentType): any {
    debugger

    const rentTypedata: any = RentType.value;
    if (rentTypedata === 1) {
      this.myForm.reset();
      this.myForm.value.amenityChargeCodeId = "";
      this.isDropdownDisabled = true;

    } else {
      this.isDropdownDisabled = false;
      this.dataService.GetChargeCode().subscribe(response => {
        this.chargeCode = response.map((item: any) => ({
          name: item.chargeCode + ' - ' + item.description,
          value: item.chargeCodeId
        }));
        console.log(response);
      });
    };
  }
  // export() {
  //   import("xlsx").then(xlsx => {
  //     const worksheet = xlsx.utils.json_to_sheet(this.myData);
  //     const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
  //     const excelBuffer: any = xlsx.write(workbook, {
  //       bookType: "xlsx",
  //       type: "array"
  //     });
  //     this.saveAsExcelFile(excelBuffer, "results");
  //   });

  // }

  // saveAsExcelFile(buffer: any, fileName: string): void {
  //   let EXCEL_TYPE =
  //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  //   let EXCEL_EXTENSION = ".xlsx";
  //   const data: Blob = new Blob([buffer], {
  //     type: EXCEL_TYPE
  //   });
  //   FileSaver.saveAs(
  //     data,
  //     fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
  //   );
  // }


  private convertFormDataToJson(formGroup: FormGroup): any {
    const formJson = {};
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);

      if (control instanceof FormControl) {
        formJson[key] = control.value;
      } else if (control instanceof FormGroup) {
        formJson[key] = this.convertFormDataToJson(control);
      }
    });

    return formJson;
  }
}