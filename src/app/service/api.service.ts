import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import { Movie } from '../Model/movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // public url1  = environment.popularMoviesUrl
  url : string = 'https://api.themoviedb.org/3/';
  // baseUrl: string;
  // apiKey: string;
  // language: string;
  // region: string;

  constructor( private http: HttpClient ) {
    // this.baseUrl = 'https://api.themoviedb.org/3/';
    // this.apiKey = '36d53de2a3632c1939907e6f9a567b84';
    // this.language = 'en-US';
    // this.region = 'US';
  }

  getlatestMovies() : Observable<any>{
    return this.http.get<any>(this.url+"/movie/top_rated?api_key="+environment.api_key);
    // return this.http.get(`${this.baseUrl}movie/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }

  getpopularMovies(): Observable<Movie>{
    return this.http.get<Movie>(this.url+"/movie/popular?api_key="+environment.api_key);
  }

  getNowPlayingmovies(): Observable<Movie>{
    return this.http.get<Movie>(this.url+"/movie/now_playing?api_key="+environment.api_key);
  }

  getTrendingmovies(): Observable<Movie>{
    return this.http.get<Movie>(this.url+"/trending/all/week?api_key="+environment.api_key);
  }

  gettopRated(): Observable<Movie>{
    return this.http.get<Movie>(this.url+"/movie/top_rated?api_key="+environment.api_key);
  }

  getUpcomingmovies(): Observable<Movie>{
    return this.http.get<Movie>(this.url+"/movie/upcoming?api_key="+environment.api_key);
  }

  getoriginals(): Observable<Movie>{
    return this.http.get<Movie>(this.url+"/discover/tv?api_key="+environment.api_key);
  }
}
