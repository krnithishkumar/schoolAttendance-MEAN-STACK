import { Component, ViewChild } from '@angular/core';
import {NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Class } from '../models/class.model';

@Component({
    selector: 'classManagement-component',
    templateUrl: './classManagement.component.html',
    styleUrls: ['./classManagement.component.css'],
    providers:[AuthService]
})

export class classManagementComponent {


    @ViewChild('f') form:NgForm;
  constructor(private authservice:AuthService){}


  onSubmit(f:NgForm){
    console.log(f);
    let k=(f.value);
    let g;
    

  const user =new Class(k.classid,k.standard,k.section);

    this.authservice.classsignUp(user)
    .subscribe(
      data => console.log(data),
      error =>console.error(error),
      );
   
    this.form.reset();
}


}