import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse } from "src/app/shared/state/app.state";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root'})
export class AccService{
  host : string = (Math.random()>0)?environment.host:environment.failure;

  constructor(private http: HttpClient){}

  public get_all_bio(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.host + '/acceuil');
  }

}
