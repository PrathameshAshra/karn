import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    // Get the auth token from the service.
    let authToken = localStorage.getItem('auth-token');
    console.log(authToken)
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
    
      headers: req.headers.set('Authorization', `${authToken}`,  )
    });
    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}