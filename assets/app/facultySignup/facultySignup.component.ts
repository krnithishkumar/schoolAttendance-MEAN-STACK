import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth/auth.service'; 
import {User} from '../models/user.model';
import {ViewChild} from '@angular/core';
@Component({
    selector: 'facultySignup-component',
    templateUrl: './facultySignup.component.html',
    styleUrls: ['./facultySignup.component.css'],
    providers:[AuthService]
})

export class facultySignupComponent {

    constructor(private authservice:AuthService){}

    @ViewChild('f') form:NgForm;

    genders=['male','female'];

    onSubmit(f:NgForm){
        console.log(f);
        let k=(f.value);
        let g;
        

       // const user =new User(k.staffid,k.password,k.name,k.dateodbirth,k.gender,k.email,k.phone,k.classid);
       const user =new User(k.staffid,k.password,k.name.toUppserCase(),k.dateofbirth,k.gender,k.email,k.phone);

        this.authservice.signUp(user)
        .subscribe(
          data => console.log(data),
          error =>console.error(error),
          );
       
        this.form.reset();
    }

}