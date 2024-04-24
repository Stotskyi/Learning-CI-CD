import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData():Observable<string>{
    return this.http.get('http://localhost:5247/', {
      responseType: 'text'
    });
    
  }
}
