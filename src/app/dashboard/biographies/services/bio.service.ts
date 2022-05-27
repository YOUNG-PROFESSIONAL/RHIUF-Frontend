import { ApiResponse } from './../../../state/app.state';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
@Injectable({ providedIn: 'root'})
export class BioService{
  host : string = (Math.random()>0.1)?environment.host:environment.failure;

  constructor(private http: HttpClient)
  {

  }

public get_all_bio(): Observable<ApiResponse>{
  return this.http.get<ApiResponse>(this.host + '/dashboard/bio');
}
}
