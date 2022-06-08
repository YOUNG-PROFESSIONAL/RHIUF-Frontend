import { ApiResponse } from '../../../../shared/state/app.state';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Bio } from '../models/Bio.model';
@Injectable({ providedIn: 'root'})
export class BioService{
  host : string = (Math.random()>0)?environment.host:environment.failure;

  constructor(private http: HttpClient){}

  public get_all_bio(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.host + '/dashboard/bio');
  }
  public update_bio(bio:Bio): Observable<ApiResponse>{
    return this.http.put<ApiResponse>(this.host + '/dashboard/bio',bio);
  }
}
