import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {LoginService} from "./login.service"

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.loginService.getToken();

    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer' + authToken` }
      });
    }

    return next.handle(request);
  }
}

