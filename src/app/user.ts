export class User {
   
    username:string;
    email:string;
    pwd:string;
    valid:boolean;
    constructor(username:string='',email:string='',pwd:string='',valid=false){
       
        this.username = username;
        this.email = email;
        this.pwd=pwd;
        this.valid = valid;
    }
}
