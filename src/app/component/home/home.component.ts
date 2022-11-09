import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Model/movie';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  latestMovies: any;
  popularMovies !: Movie;
  NowPlayingmovies !: Movie;
  Trendingmovies !: Movie;
  topRated !: Movie;
  Upcomingmovies !: Movie;
  originals !: Movie;

  constructor(
    public apiservice: ApiService,
    public actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getlatestMovies();
    this.getpopularMovies();
    this.getNowPlayingmovies();
    this.getTrendingmovies();
    this.gettopRated();
    this.getUpcomingmovies();
    this.getoriginals();
  }

  getlatestMovies() {
    this.apiservice.getlatestMovies().subscribe(data => {
      this.latestMovies = this.changeData(data);
      console.log(this.latestMovies);
    }, error => console.log('not able to get latest movies', error));
  }
  changeData(data: any): any {
    if (!data.backdrop_path) {
      data.backdrop_path = "https://image.tmdb.org/t/p/original" + data.poster_path + "?api_key=" + environment.api_key;
    }
    else {
      data.backdrop_path = "https://image.tmdb.org/t/p/original" + data.backdrop_path + "?api_key=" + environment.api_key;
    }
    return data;
  }

  getpopularMovies() {
    this.apiservice.getpopularMovies().subscribe(data => {
      this.popularMovies = this.modifyData(data);
      console.log(this.popularMovies);
    }, error => console.log('not able to get Popular Movies', error));
  }

  getNowPlayingmovies() {
    this.apiservice.getNowPlayingmovies().subscribe(data => {
      this.NowPlayingmovies = this.modifyData(data);
      console.log(this.NowPlayingmovies);
    }, error => console.log('not able to get Now Playing movies', error));
  }

  getTrendingmovies() {
    this.apiservice.getTrendingmovies().subscribe(data => {
      this.Trendingmovies = this.modifyData(data);
      console.log(this.Trendingmovies);
    }, error => console.log('not able to get Trending Movies', error));
  }

  gettopRated() {
    this.apiservice.gettopRated().subscribe(data => {
      this.topRated = this.modifyData(data);
      console.log(this.topRated);
    }, error => console.log('not able to get Top Rated Movies', error));
  }

  getUpcomingmovies() {
    this.apiservice.getUpcomingmovies().subscribe(data => {
      this.Upcomingmovies = this.modifyData(data);
    }, error => console.log('not able to get Upcoming Movies', error));
  }

  getoriginals() {
    this.apiservice.getoriginals().subscribe(data => {
      this.originals = this.modifyData(data);
    }, error => console.log('not able to get Originals', error));
  }

  modifyData(movies: Movie): Movie {
    if (movies.results) {
      // using for each loop
      movies.results.forEach(element => {
        element.backdrop_path = "https://image.tmdb.org/t/p/original" + element.backdrop_path + "?api_key=" + environment.api_key;
        if (!element.title) {
          element.title = element?.name;
        }
      });
    }
    return movies
  }
}
