import { User } from "./models/user.model";
import {Http , Headers} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class userService
{
   users:User[] =[];

  constructor(private  http:Http){ }

   addUser(tuser:User){
         this.users.push(tuser);
         console.log(this.users);
         const body = JSON.stringify(tuser);
         const headers = new Headers({'Content-Type':'application/json'});
         return this.http.post('http://localhost:3000/user',body,{headers:headers})
         .map((response: any) => response.json())
         .catch((err : Response)=> Observable.throw(err.json())
         );
          
         }
     
}
  