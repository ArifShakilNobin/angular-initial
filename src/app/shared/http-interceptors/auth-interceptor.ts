// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(
//   ) {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     let authToken = this.authStorageService.getToken();
//     if (authToken) {
//       const authReq = req.clone({
//         setHeaders: { Authorization: 'Bearer ' + authToken },
//       });
//       return next.handle(authReq);
//     } else {
//       return next.handle(req);
//     }
//   }
// }
