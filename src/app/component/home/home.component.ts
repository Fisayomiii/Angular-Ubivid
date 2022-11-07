import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public pMoviesArray:any = [];

  constructor(
    public apiservice: ApiService
  ) { }

  ngOnInit(): void {
    this.apiservice.getpopularmovie().subscribe(data =>{
      console.log(data);
      // setting the data gotten from the api in an array
      this.pMoviesArray = (data);
      // line 21; checking if there is any error then if there is ,console
    }, error=> console.log(error));
  }

}
