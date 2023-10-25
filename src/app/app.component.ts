import { Component,OnInit,ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myForm:FormGroup;
   alert="invalid email";
   emailvalidator=():any =>{
     if(!this.email.includes('@')){
      return alert ;
     }
   }

  constructor(private fb:FormBuilder) {
    this.myForm = this.fb.group({
      // ... other fields
      first:['',Validators.required],
      last:['',Validators.required],
      dateofbirth:['',Validators.required],
      selectcountry:['',Validators.required],
      prof:['',Validators.required],
      emailval:[this.emailvalidator]
    
    });
  }
  ngOnInit() {
      
  }
 
  phonenumber: number = +91;
  email = '';
  lastname = '';
  profession = '';
  visible:boolean=false;
  gender = '';
  country = '';
  dob = new Date();
  firstname = '';
  title = 'surveyfromapp';
  // @ViewChild('surveyForm') surveyForm:FormGroup;
 

   formsubmit(){
    if(this.myForm.valid){
    this.toggleLiveDemo();
    }else{
      console.log("no");
    }
   }

  formreset() {
    
    this.phonenumber =7028578790 ;
  this.email = '';
  this.lastname = '';
  this.profession = '';
  this.gender = '';
  this.country = '';
  this.dob = new Date();
  this.firstname = '';


   
    
  }
toggleLiveDemo(){
  this.visible=!this.visible;
}


  toggleLive() {
    this.visible = !this.visible;
   
    this.email = '';
    this.lastname = '';
    this.profession = '';
    this.gender = '';
    this.country = 'Select a Country ...';
    this.dob = new Date();
    this.firstname = '';

  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
    console.log(event);
  }



}
