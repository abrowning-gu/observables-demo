import { Injectable,inject } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';

import {of,tap} from 'rxjs';
import {User} from '../user';


@Injectable({providedIn: 'root'})

export class AuthService {

 private http = inject(HttpClient);
  isLoggedin(){
    if (sessionStorage.getItem('currentUser')){
      return true;
    }else{
      return false;
    }
  }

  login(email:string,pwd:string){
    return this.http.post<User>('http://localhost:3000/api/auth', { email: email, upwd: pwd });
  }
}


