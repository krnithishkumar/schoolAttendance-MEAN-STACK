import { User } from "../models/user.model";
import {Student } from "../models/student.model";
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
@Injectable()
export class AuthService{

constructor(private http:Http){

}

    signUp(user:User){
        const body = JSON.stringify(user);
        const header = new Headers({'Content-Type':'application/json'})
           return this.http.post('http://localhost:3000/user',body,{headers:header})
           .map((response:any)=> response.json())
           ._catch((err:Response)=> Observable.throw(err.json())
    );
    }

    StudentsignUp(user:Student){
        const body = JSON.stringify(user);
        const header = new Headers({'Content-Type':'application/json'})
           return this.http.post('http://localhost:3000/student',body,{headers:header})
           .map((response:any)=> response.json())
           ._catch((err:Response)=> Observable.throw(err.json())
    );
    }

    classsignUp(user:Student){
        const body = JSON.stringify(user);
        const header = new Headers({'Content-Type':'application/json'})
           return this.http.post('http://localhost:3000/student',body,{headers:header})
           .map((response:any)=> response.json())
           ._catch((err:Response)=> Observable.throw(err.json())
    );
    }

} 