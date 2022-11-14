import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})

export class MovieInfoComponent implements OnInit {

  public movieName = "";
  public movieobject: any = {};

  constructor(
    public actRoute: ActivatedRoute,
    public apiService: ApiService
  ) { }


  ngOnInit(): void {
    // this.movieName = this.actRoute.snapshot.params["user"];
    // this.apiService.getMovie(this.movieName).subscribe(data => {
    //   this.movieobject = data;
    //   console.log(data);
    // }, error => console.log(error));
  }
}
