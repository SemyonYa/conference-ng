import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { AuthService } from './_services/auth.service';
import { tap, catchError, switchMap, filter, take } from 'rxjs/operators';
import { DataService } from './_services/data.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authService: AuthService, private dataService: DataService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const requestUp = request.clone({
      headers: request.headers.set('Conf-Auth', this.authService.accessTokenFromStorage() ? this.authService.accessTokenFromStorage() : '')
    });
    return next.handle(requestUp)
      .pipe(
        catchError(
          error => {
            if (error instanceof HttpErrorResponse) {
              if (error.status === 401) {
                console.log('first 401');
                return this.handle401Error(request, next);
              }
              if (error.status === 403) {
                this.authService.logout();
              }
            } else {
              return throwError(error);
            }
          }));
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      console.log('start new refreshing');
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.dataService.refreshing(this.authService.refreshTokenFromStorage())
        .pipe(
          tap(
            (tokens: any) => {
              console.log('two tokens to storage');
              this.authService.refreshTokenToStorage(tokens.refresh);
              this.authService.accessTokenToStorage(tokens.access);
            },
            // error => {
            //   console.log("AuthInterceptor -> handle401Error -> error", error)
            //   if (error instanceof HttpErrorResponse && error.status === 401) {
            //     this.authService.logout();
            //   }
            // }
          ),
        )
        .pipe(
          switchMap((tokens: any) => {
            this.isRefreshing = false;
            this.refreshTokenSubject.next(tokens.access);
            console.log('refreshing succeeded, updating request');
            return next.handle(request.clone({
              headers: request.headers.set('Conf-Auth', this.authService.accessTokenFromStorage() ? this.authService.accessTokenFromStorage() : '') // !!!
            }));
          }));

    } else {
      console.log('refreshing is running');
      return this.refreshTokenSubject.pipe(
        filter(access => access != null),
        take(1),
        switchMap(access => {
          return next.handle(request.clone({
            headers: request.headers.set('Conf-Auth', this.authService.accessTokenFromStorage() ? this.authService.accessTokenFromStorage() : '') // !!!
          }));
        }));
    }
  }
}
