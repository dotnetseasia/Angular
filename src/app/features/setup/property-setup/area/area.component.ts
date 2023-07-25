import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PropertySetupService } from '../property-setup.service';
import { catchError } from 'rxjs';

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
  selector: 'ms-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
  providers: []
})
export class AreaComponent {
  value!: string;
  first: number = 0;
  posts: any;
  editArea: boolean = false;
  createArea: boolean = false;
  updateArea: FormGroup;
  createNewArea: FormGroup;
  areadata: any;
  selectedState: number;
  selectedValue: any;
  status: any
  availableActiveProperties: any;
  assignedProperties: any;
  rows: number = 10;
  assignpropertyid: string[] = [];
  activeSelectedItems: string[] = [];
  assignedSelectedItems: string[] = []
  selectedArea: any;
  selectedItem: any;
  selectedRegionalManager: any[] = []

  constructor(private fb: FormBuilder, private propertyService: PropertySetupService, private http: HttpClient) {
  }

  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }


  test(event: Event) {
    const value = (event);
    console.log(event['value'].name, "valueeeeeeeeeeeeee")
  }

  selectedStatus: any[] = [
    { name: 'Active', value: 1 },
    { name: 'InActive', value: 0 }

  ];


  ngOnInit() {
    this.getRegionalManager()
    this.getassignActiveAreaData()


    this.updateArea = this.fb.group({
      status: ['', Validators.required],
      area: ['', Validators.required],
      areaName: [''],
      areaDescription: [''],
      regionalManager: [''],
      inactiveCheckbox: [''],

    })

    this.createNewArea = this.fb.group({
      areaName: new FormControl(),
      areaDescription: new FormControl(),
      inactiveCheckbox: new FormControl(),
      regionalManager: new FormControl()

    })


  }

  onEditArea() {
    this.areadata = this.updateArea.value.area
    console.log("this.check", this.areadata)
    this.getPropertyAreaData(this.areadata);
  }

  getPropertyAreaData(data: any) {
    if (this.updateArea.valid) {
      this.editArea = true;
      this.createArea = false;
      this.propertyService.GetPropertyAreaById(data.value).subscribe(res => {
        console.log("getPropertyAreaById ===", res)
        this.updateArea.patchValue({
          areaName: res[0]?.propertyArea,
          areaDescription: res[0]?.propertyDescription,
          inactiveCheckbox: res[0]?.isActive == true ? 0 : 1,
           regionalManager:this.getOptionNameById(res[0]?.regionalManagersId)
        })
      })
      this.getassignAreaData(this.areadata.value)
    }
  }

  getOptionNameById(id: number): string {
    const selectedOption = this.selectedRegionalManager.find(( {value} ) => value == id);
    return selectedOption ? selectedOption.value : null;
  }

  onCreateArea() {
    this.createArea = true;
    this.editArea = false;
    this.assignedProperties=[]
  }

  getAreadata(event: Event): any {
    const status: any = event['value'].value;
    this.propertyService.getPropertyAreaName(status).subscribe(res => {
      console.log(res, "area data")
      this.selectedArea = res.map((item: any) =>
      ({
        name: item.propertyArea,
        value: item.propertyAreaId
      }))
    })
  }

  getRegionalManager() {
    this.propertyService.getRegionalManagerdata().subscribe(res => {
      console.log(res, "Regional Manager")
      this.selectedRegionalManager = res.map((item: any) =>
      ({
        name: item.regionalManager,
        value: item.regionalManagerId
      }))
    })

  }

  getassignActiveAreaData() {
    this.propertyService.assignActiveAreaData().subscribe(res => {

      this.availableActiveProperties = res[0].oPropertyNoAreaBE
      console.log(" this.availableActiveProperties", this.availableActiveProperties)
    })
  }

  getassignAreaData(id: any) {
    this.propertyService.assignAreaData(id).subscribe(res => {
      console.log("getassignAreaData", res)
      this.assignedProperties = res[0].oPropertyAssignedArea
    })
  }



  onSaveArea() {
    let data =
    {
      areaName: this.createNewArea.value.areaName,
      areaDescription: this.createNewArea.value.areaDescription,
      assignpropertyid: this.assignpropertyid.toString(),
      isActive: this.createNewArea.value.inactiveCheckbox == true ? 0 : 1,
      regionalManagersId: this.createNewArea.value.regionalManager.value,
      propertyAreaId: 0,
    };
    this.propertyService.savePropertyAreadata(data).subscribe
      (
        (response) => {
          console.log("api response for create area ", response)
        },
        (error) => {
          console.log("api error for create area", error)
        }
      )
  }

  activePropertiesSelected(item: string) {
    const index = this.activeSelectedItems.indexOf(item);
    if (index > -1) {
      this.activeSelectedItems.splice(index, 1);
    }
    else {
      this.activeSelectedItems.push(item)
    }
  }

  assignedPropertiesSelected(item: string) {
    const index = this.assignedSelectedItems.indexOf(item);
    if (index > -1) {
      this.assignedSelectedItems.splice(index, 1);
    }
    else {
      this.assignedSelectedItems.push(item)
    }
  }

  isSelectedassigned(item: string) {
    return this.assignedSelectedItems.includes(item)
  }

  isSelectedactiveProperties(item: string) {
    return this.activeSelectedItems.includes(item)
  }

  // onleftTransfer() {
  //   debugger
  //   if (this.activeSelectedItems.length > 0) {
  //     this.assignedProperties = this.activeSelectedItems
  //     this.assignpropertyid = this.assignedProperties.map(x => x.propertyID)
  //     console.log("assignpropertyid == ", this.assignpropertyid)
  //     console.log("this.assignedProperties", this.assignedProperties)
  //     this.removeSelectedAvailableActiveProperties()
  //   }
  // }

  onleftTransfer() {
    debugger
    if (this.activeSelectedItems.length > 0) {
      const transferItems = [...this.activeSelectedItems]; // Clone the items to transfer
      this.assignedProperties = [...this.assignedProperties, ...transferItems];
      this.assignpropertyid = this.assignedProperties.map((x) => x.propertyID);
      console.log("assignpropertyid == ", this.assignpropertyid);
      console.log("this.assignedProperties", this.assignedProperties);
      this.removeSelectedAvailableActiveProperties();
    }
  }

  // Function to transfer data from right to left
  onrightTransfer() {
  if (this.assignedSelectedItems.length > 0) {
    const transferItems = [...this.assignedSelectedItems]; 
    this.availableActiveProperties = [...this.availableActiveProperties, ...transferItems];
    this.removeSelectedassignedProperties();
  }
}
 
  removeSelectedAvailableActiveProperties() {
    this.availableActiveProperties = this.availableActiveProperties.filter(
      (item) => !this.activeSelectedItems.includes(item)
    );
  }
// Function to remove selected items from assignedProperties
removeSelectedassignedProperties() {
  this.assignedProperties = this.assignedProperties.filter(
    (item) => !this.assignedSelectedItems.includes(item)
  );
}
  
}


