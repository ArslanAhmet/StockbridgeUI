import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


export const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, PUT, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  }),
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      "/authorize",
      {
        email,
        password,
      },
      HTTP_OPTIONS
    );
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
