import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { users } from "./users.model";


@Injectable({ providedIn:"root"})
export class  UsersService {


  constructor(private http: HttpClient ){ }

  listIncidents(){
    return this.http.get <users[]> ("http://localhost:4200/api/users/list")

  }
  viewForm(id:any){
    return this.http.get("http://localhost:4200/api/users/" + id)


  }
  updateform(id:any,data:any){
    return this.http.put("http://localhost:4200/api/users/" + id, data)


  }
  adduserForm(data:any){
    console.log(data);
    return this.http.post('http://localhost:4200/api/users/signup',data)


  }
  deleteUser(id:any){
    return this.http.delete("http://localhost:4200/api/users/" + id)
  }




}