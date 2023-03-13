import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable } from 'rxjs'
import { users } from "./users.model";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) { }

  listIncidents(): Observable<users[]> {
    return this.http.get<users[]>(`http://localhost:3000/api/users/list`)
  }

  viewForm(id: any): Observable<any> {
    return this.http.get("http://localhost:3000/api/users/" + id )
  }

  updateform(id: any, data: any): Observable<any> {
    return this.http.put("http://localhost:3000/api/users/" + id, data)
  }

  adduserForm(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`http://localhost:3000/api/users/signup`, data)
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete("http://localhost:3000/api/users/" + id)
  }
}
