import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url1  = environment.popularMoviesUrl
  constructor(
    private http: HttpClient
  ) { }

  getpopularmovie(){
    return this.http.get<any>(this.url1);
  }
}
