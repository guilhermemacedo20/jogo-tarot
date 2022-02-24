import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitialService {  
  constructor(private http: HttpClient) { }

  public getAPI():Observable<any>{
   return this.http.get('https://dentalclouddev.s3.amazonaws.com/challenge/tarot.json');
  }
  
}
