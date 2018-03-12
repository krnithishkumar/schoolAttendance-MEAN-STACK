import { Component } from '@angular/core';
import {NgForm}  from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Student} from '../models/student.model';
import { ViewChild}  from '@angular/core';
@Component({
    selector: 'studentSignup-component',
    templateUrl: './studentSignup.component.html',
    styleUrls: ['./studentSignup.component.css'],
    providers:[AuthService]
})

export class studentSignupComponent {

    constructor(private authservice:AuthService){}

    @ViewChild('f') form:NgForm;

 genders =['male', 'female'];
 classes=['c1','c2'];

onSubmit(f:NgForm){
    console.log(f);
    let k=(f.value);


 const user = new Student(k.studentid,k.name,k.fathersname,k.mothersname,k.dateofbirth,k.gender,k.age,k.phonenumber,k.classid);

//const user = new Student('bit062','viswa','ravi','latha',new Date(),'male',19,'987665567','c1');

    this.authservice.StudentsignUp(user)
        .subscribe(
          data => console.log(data),
          error =>console.error(error),
          );

          this.form.reset();
}

}