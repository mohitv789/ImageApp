import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import jwt_decode from 'jwt-decode';
export interface AuthResponseData {
  access: string;
  refresh: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private decoded;
  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string, first_name: string, last_name: string, phone_number: string, age: Number, gender: string) {
    return this.http
      .post<AuthResponseData>(
        'http://localhost:8000/api/signup/',
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
        catchError(this.handleError)
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'http://localhost:8000/api/token/access/',
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          console.log(resData.access)
          this.handleAuthentication(resData.access)

          this.router.navigate(['/api/images']);

        })
      );
  }

  reacess(refresh_token : string) {
    return this.http
      .post<AuthResponseData>(
        'http://localhost:8000/api/token/refresh/',
        {
          refresh: refresh_token,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          console.log(resData.access)
          this.handleAuthentication(resData.access)


        })
      );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  }

  autoLogin() {
    let token = localStorage.getItem('access');
    let refresh = localStorage.getItem('refresh');
    if (!!token) {
      token = token;
      refresh = refresh;
    }
    if (!token) {
      return;
    }
    const loadedUser = new User(
      token,

    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      this.decoded = jwt_decode(loadedUser.token);
      console.log(this.decoded);

      const expirationDuration = new Date(this.decoded.exp).getTime() - new Date().getTime();
      if (expirationDuration - 300 < 0) {
        this.reacess(localStorage.getItem('refresh'));
      }

    }
  }

  private handleAuthentication(
    token: string
  ) {
    const user = new User(token);
    this.user.next(user);
    localStorage.setItem('access', JSON.stringify(token));
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
    let token = localStorage.getItem('token');
    if (!!token) {
      return token
    }
  }

  get_loggedin_userid() {
    return this.decoded["user_id"];

  }
}

