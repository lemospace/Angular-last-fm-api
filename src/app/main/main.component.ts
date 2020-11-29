import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  response: [];



  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTopTracks();
  }
  getTopTracks() {
    this.http.get<any>(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=6361dc7b5b6c586c382c3142261e01e6&format=json`)
      .subscribe(response => {
        this.response = response;
        console.log(this.response);
      })

  }
  objectKeys(obj) {
    return Object.keys(obj);
  }
}
