import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '../Model/movie';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url: string = 'https://api.themoviedb.org/3/';
  public popularMoviesurl = environment.popularMoviesUrl

  constructor(
    private http: HttpClient
  ) { }

  getlatestMovies(): Observable<any> {
    return this.http.get<any>(this.url + "/movie/latest?api_key=" + environment.api_key);
  }

  getpopularMovies(): Observable<Movie> {
    return this.http.get<Movie>(this.url + "/movie/popular?api_key=" + environment.api_key);
  }

  getNowPlayingmovies(): Observable<Movie> {
    return this.http.get<Movie>(this.url + "/movie/now_playing?api_key=" + environment.api_key);
  }

  getTrendingmovies(): Observable<Movie> {
    return this.http.get<Movie>(this.url + "/trending/all/week?api_key=" + environment.api_key);
  }

  gettopRated(): Observable<Movie> {
    return this.http.get<Movie>(this.url + "/movie/top_rated?api_key=" + environment.api_key);
  }

  getUpcomingmovies(): Observable<Movie> {
    return this.http.get<Movie>(this.url + "/movie/upcoming?api_key=" + environment.api_key);
  }

  getoriginals(): Observable<Movie> {
    return this.http.get<Movie>(this.url + "/discover/tv?api_key=" + environment.api_key);
  }

  getMovie(movie:any) {
    return this.http.get<any>(`${this.popularMoviesurl}/${movie}`);
  }
}
