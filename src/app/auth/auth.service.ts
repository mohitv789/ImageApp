import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData {
  token: string;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string, first_name: string, last_name: string, phone_number: string, age: Number, gender: string) {
    return this.http
      .post<AuthResponseData>(
        'http://localhost:8000/signup/',
        {
          email: email,
          first_name: first_name,
          last_name: last_name,
          phone_number: phone_number,
          age: age,
          gender: gender,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(resData.token)
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'http://localhost:8000/login/',
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(resData.token)
        })
      );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('token');
  }

  // autoLogin() {
  //   const userData: {
  //     token: string;
  //   } = JSON.parse(localStorage.getItem('token'));
  //   if (!userData) {
  //     return;
  //   }
  //   const loadedUser = new User(
  //     userData.token,
  //   );
  //
  //   if (loadedUser.token) {
  //     this.user.next(loadedUser);
  //     // const expirationDuration =
  //     //   new Date(userData._tokenExpirationDate).getTime() -
  //     //   new Date().getTime();
  //     // this.autoLogout(expirationDuration);
  //   }
  // }

  private handleAuthentication(
    token: string
  ) {
    const user = new User(token);
    this.user.next(user);
    localStorage.setItem('token', JSON.stringify(token));
  }



  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }

  get_token() {
    const tokenData: {
      token: string;
    } = JSON.parse(localStorage.getItem('token'));
    if (!tokenData) {
      return;
    } else {
      return tokenData.token;
    }
  }
}
