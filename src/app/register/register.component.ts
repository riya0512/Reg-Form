import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Data } from '../data';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  countryNames:string[]=["India","Canada","Australia","UK","USA"];

  code:any={"India":"+91",
                "Canada":"+1",
                "Australia":"+61",
                "UK":"+44",
                "USA":"+1"}

  data:Data=new Data();
  validData:boolean=false;
  datepipe:string="";




  constructor() { }

  ngOnInit(): void {

  }


  onSubmit(f:any,firstname:any,lastname:any,password:any,email:any,country:any,countrycode:any,mobileno:any){
    this.data.firstname=firstname.value;
    this.data.lastname=lastname.value;
    this.data.password=password.value;
    this.data.email=email.value;
    this.data.country=country.value;
    this.data.countrycode=countrycode.value;
    this.data.mobileno=mobileno.value;
  }
}
