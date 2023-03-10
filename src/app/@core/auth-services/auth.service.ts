import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


export const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  }),
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) { }

  // login(email: string, password: string): Observable<any> {
  //   return this.http.post(
  //     environment.AuthroizeUrl + "/authorize",
  //     {
  //       email,
  //       password,
  //     },
  //     HTTP_OPTIONS
  //   );
  // }

  loginWithAdress(email: string, password: string): Observable<any> {
    return this.http.post(environment.AuthroizeUrl + "/Authorize",
      {
        email,
        password,
      }, HTTP_OPTIONS
      //   {
      //   headers: new HttpHeaders()
      //     .set('Content-Type', "application/json")
      //     .set('Access-Control-Allow-Credentials', 'true')
      //     .set('Access-Control-Allow-Origin', 'http://localhost:4200')
      //     .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS')
      //     .set('Access-Control-Allow-Headers', '*')
      // }
    )
  }

  refreshToken(token: string) {
    return this.http.post(
      "/RefreshToken",
      {
        refreshToken: token,
      },
      HTTP_OPTIONS
    );
  }
}
