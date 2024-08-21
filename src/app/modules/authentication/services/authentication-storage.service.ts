import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap } from 'rxjs';
import { applicationUrls } from 'src/app/shared/application-constants/application-urls.const';
import {  ServerResponse } from 'src/app/shared/models/dto/server-response.dto';
import {
  ErrorHandler,
  HttpErrorHandler,
} from 'src/app/shared/services/http-error-handler.service';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationStorageService {
  private handleError: ErrorHandler;
  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService,
    // private authorizationService: AuthorizationService,
    private httpErrorHandler: HttpErrorHandler,
    private router: Router
  ) {
    this.handleError = this.httpErrorHandler.createErrorHandler(
      'Authentication Service'
    );
  }

  // login(userLoginCredential: Login): Observable<LoginResponse> {
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');

  //   return this.httpClient.post<LoginServerResponse>(applicationUrls.user.login, userLoginCredential, {headers})
  //     .pipe(
  //       catchError(this.handleError<never>('User login')),
  //       map((response: LoginServerResponse) => {
  //         if (response.Success) {
  //           return response.Data as LoginResponse; // Cast data to LoginResponse
  //         } else {
  //           throw new Error(response.Message); // Throw error if not successful
  //         }
  //       }),
  //       tap({
  //         next: (currentUser: LoginResponse) => {
  //           this.authenticationService.saveCurrentUserInfo(currentUser);
  //           const currentUserPermissions: Permission[] = [];

  //           currentUser.roles.forEach((role) => currentUserPermissions.push(...role.permissions));

  //           this.authorizationService.CurrentUserPermissions =currentUserPermissions;
  //         },
  //         error: (error) => {
  //           this.authenticationService.currentUserSubject.next(error);
  //         },
  //       })
  //     );
  // }

  registration(userLoginCredential: User): Observable<ServerResponse> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<ServerResponse>(applicationUrls.user.register,userLoginCredential,{ headers }).pipe(
      catchError(this.handleError<never>('User signup')),
      tap({
        next: (response: ServerResponse) => {
          if (response.success) {
            // console.log('Registration response:', response);

            this.router.navigate(['/login']);
          }
        },
        error: (error) => {
          this.authenticationService.currentUserSubject.next(error);
        },
      })
    )
  }
  login(credentials: any): Observable<any> {
    return this.httpClient.post<any>(applicationUrls.user.login, credentials).pipe(
      tap(response => {
        // console.log('Login response:', response);

        if (response && response.success && response.data && response.data.token) {
          localStorage.setItem('token', response.data.token);
        } else {
          console.error('Token not found in the response');
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }


}
