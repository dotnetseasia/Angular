import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';
import { PrimeNGConfig } from "primeng/api";
import { ReactiveFormsModule } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MarketSourceService } from './market-source.service';
import { Dropdown } from 'primeng/dropdown';
import { ConfirmationService } from 'primeng/api';
import { PaginatorModule } from "primeng/paginator";
import { LazyLoadEvent } from 'primeng/api';

interface User {
  StartRow: number;
  PageSize: number;
  SortColumnName: string;
  SortOrderBy: string;
  SearchText:string;
  SearchOperator:string;
  SearchColumnName:string;
  KeywordSearch:string;
  StatusID:number
  }
interface SearchStatus {
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
  selector: 'ms-market-source',
  templateUrl: './market-source.component.html',
  styleUrls: ['./market-source.component.scss'],
  providers: [ConfirmationService]
})
export class MarketSourceComponent {

  dropdownOptions: SelectItem[] = [
    { label: 'Active', value: 1 },
    { label: 'InActive', value: 0 }
  ];
  menuItems: any[];
  searchItems : any[];
  showConfirmation: boolean = false;
  isEdit: boolean = false;
  selectedItem: any;
  selectedItem2:any;
  @ViewChild('dropdown') dropdown: Dropdown;
  myForm: FormGroup;
  value!: string;
  mylist:any;
  data:any=[];
  paginatedItems:any=[];
  first: number = 5;
  
  user : User = {
    StartRow:101,
    PageSize : 100,
    SortColumnName: "HeardAboutUsId",
    SortOrderBy : "desc",
    SearchText:"",
    SearchOperator:"",
    SearchColumnName:"",
    KeywordSearch:"",
    StatusID:1
    }
    user1 : User = {
      StartRow:101,
      PageSize : 100,
      SortColumnName: "HeardAboutUsId",
      SortOrderBy : "desc",
      SearchText:"",
      SearchOperator:"",
      SearchColumnName:"",
      KeywordSearch:"",
      StatusID:0
      } 
      user2: User = {
        StartRow:101,
        PageSize : 100,
        SortColumnName: "HeardAboutUsId",
        SortOrderBy : "desc",
        SearchText:"",
        SearchOperator:"",
        SearchColumnName:"",
        KeywordSearch:"",
        StatusID:1
        } 
        user3: User = {
          StartRow:101,
          PageSize : 100,
          SortColumnName: "HeardAboutUsId",
          SortOrderBy : "desc",
          SearchText:"",
          SearchOperator:"",
          SearchColumnName:"",
          KeywordSearch:"",
          StatusID:-1
          } 

  KeyWord: string = "";
  isOpen=true;
  rows: number = 5;
  
  itemsPerPage = 10;
  totalItems: number;
  currentPage = 1;
  rowsPerPageOptions=[10,20,30,50,100]
  constructor(private primengConfig: PrimeNGConfig, private formbuilder:FormBuilder,private services:MarketSourceService) {
  
    this.initializeForm();
    this.menuItems = [
      { label: 'Edit', icon: 'pi pi-pencil' },
      { label: 'Delete', icon: 'pi pi-trash' }
    ];
    this.searchItems = [
      
      { label: 'All', icon: 'pi pi-trash' },
      { label: 'Active', icon: 'pi pi-pencil' },
      { label: 'InActive', icon: 'pi pi-trash' }
    ]
  }
  initializeForm(): void {
    debugger
    if (this.isEdit) {
      this.myForm = this.formbuilder.group({
        heardAboutUsId: [''],
        Description: ['', Validators.required],
        IsActive: ['', Validators.required]
      });
    } else {
      this.myForm = this.formbuilder.group({
        Description: ['', Validators.required],
        IsActive: ['', Validators.required]
      });
    }
  }

  searchByKeyword(){
    this.user3.KeywordSearch = this.KeyWord;
    //alert(this.user3.KeywordSearch)
    this.services.GetMarketSourceGrid(this.user3).subscribe((response) => {
      console.log(this.data);
      this.data = response;
      this.totalItems = this.data.length
      this.paginateItems(1);
     }) 
  }
  onStatus(selectedItem:string){

    if (selectedItem === 'Active') {
      this.services.GetMarketSourceGrid(this.user2).subscribe((response) => {
        console.log(this.data);
        this.data = response;
        this.totalItems = this.data.length;
        this.paginateItems(1);
       }) 
    } else if (selectedItem === 'InActive') {
      debugger
      this.services.GetMarketSourceGrid(this.user1).subscribe((response) => {
        console.log(this.data);
        this.data = response;
        this.totalItems = this.data.length;
        this.paginateItems(1); 
       }) 
    }
    else if (selectedItem === 'All') {
     debugger
      this.services.GetMarketSourceGrid(this.user3).subscribe((response) => {
        console.log(this.data);
        this.data = response;
        this.totalItems = this.data.length;
        this.paginateItems(1);
       }) 
    }
  }

  onSelect(selectedItem: string, heardAboutUsId: number) {
    console.log('Selected Item:', selectedItem);
    console.log('heardAboutUsId:', heardAboutUsId);

    if (selectedItem === 'Edit') {
      this.editItem(heardAboutUsId);
    } else if (selectedItem === 'Delete') {
      this.deleteItem(heardAboutUsId);
    }
  }

  editItem(heardAboutUsId: number) {
    this.isOpen = false;
    this.isEdit  =true;
    this.initializeForm();
    debugger
    console.log('Edit action triggered for heardAboutUsId:', heardAboutUsId);
    this.services.getMarketSourceDataById(heardAboutUsId).subscribe((res)=>{
           console.log(res);
           
          //  this.myForm.patchValue(res);
          this.mylist = res;
          this.myForm.patchValue({
            heardAboutUsId: res[0]?.heardAboutUsId,
            Description: res[0]?.description,
            IsActive: res[0]?.isActive,
          })
            console.log(this.myForm.value)
          //this.myForm.patchValue(this.mylist);
    })
  }

  deleteItem(heardAboutUsId: number) {
    this.showConfirmation = true;
    console.log('Delete action triggered for heardAboutUsId:', heardAboutUsId);
    this.selectedItem2 = heardAboutUsId;

  }
  deleteConfirm(heardAboutUsId: number) {
    //alert(heardAboutUsId)
    // Implement the delete functionality
    debugger
    this.services.deleteMarketSourceDataById(heardAboutUsId).subscribe((res)=>{
      alert('Delete action confirmed');
      

    });
    this.myForm.reset();
  window.location.reload();
    this.showConfirmation = false;
  }
  deleteCancel() {
    // Handle delete cancelation
    
    alert('Delete action canceled');
    this.showConfirmation = false;
  }
  onPageChange(event: any) {
    debugger;
    this.itemsPerPage=event.rows;
    this.paginateItems(event.page + 1); // Page number starts from 0, but we want it to start from 1
     // this.first = event.first;
     // this.rows = event.rows;
  }
  paginateItems(page: number) {
    debugger;
    //this.itemsPerPage = this.itemsPerPageOptions.find(option => option === this.itemsPerPage);
    const startIndex = (this.itemsPerPage * (page - 1));
    this.paginatedItems = this.data.slice(startIndex, startIndex + this.itemsPerPage);
  }
  searchStatus: SearchStatus[] | undefined;

  selectedStatus: SearchStatus | undefined;
  GetMarketSource(){
    this.services.GetMarketSourceGrid(this.user).subscribe((response) => {
        
      console.log(this.data);
      //this.data.push(response)
      this.data = response
      this.totalItems = this.data.length

      this.paginateItems(1);
      console.log(this.totalItems)
      console.log(this.rowsPerPageOptions)
       
     }) 
  }
  ngOnInit() {
    debugger
      this.searchStatus = [
          { name: 'Select', code: 'Se' },
          { name: 'ALL', code: 'Al' },
          { name: 'Active', code: 'Ac' },
          { name: 'InActive', code: 'In' }
          // { name: 'Paris', code: 'PRS' }
      ];
      this.primengConfig.ripple = true;
      this.GetMarketSource();
      
    
    } 
 openForm(){
  this.isOpen = false;
 }
 onSave(){
  this.isOpen = true;
 // this.GetMarketSource();
 }
 onCancel(){
  this.isOpen=true;
 }

 onSubmit(){
  debugger
    //console.log(this.myForm.value.MarketSource);
    const formValue = this.myForm.value;
    console.log(formValue)
   // alert(this.myForm.value.Status);
   if (this.myForm.valid) {
    //const formData = this.convertFormDataToJson(this.myForm);
    this.services.SaveMarketSource(this.myForm.value).subscribe(response => {
      debugger
      console.log("Submit ======",this.myForm.value);
      //window.location.reload();
      
    }, error => {console.log('Error:', error.error);})  
  } else {
    console.log(Error);
  }
  
  this.myForm.reset();
  window.location.reload();
  // if(this.isEdit == true){
  //   this.services.SaveMarketSource(this.myForm.value).subscribe(response => {
  //     debugger
  //     console.log(this.myForm.value);
  //   }, error => {console.log('Error:', error.error);})  
  // } else {
  //   console.log(Error);
  // }
  
 }
  
}
