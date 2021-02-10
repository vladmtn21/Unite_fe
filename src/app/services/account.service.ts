import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly resourceUrl: string="/Account";
  private readonly baseurl: string= environment.server;

  constructor(private http: HttpClient) { }

  register(body) {
    return this.http.post(this.baseurl+this.resourceUrl+"/Register", body);
  }

  login(body) {
    return this.http.post(this.baseurl+this.resourceUrl+"/Login", body);
  }
}
