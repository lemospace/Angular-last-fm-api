import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchTrack: FormGroup;

  trackName: string = '';
  response: [];

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this._createForm()
  }

  private _createForm() {
    this.searchTrack = this.fb.group({
      trackNameInput: '',
    })
  }

  search() {
    this.http.get<any>(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.trackName}&api_key=6361dc7b5b6c586c382c3142261e01e6&format=json`)
      .subscribe(response => {
        this.response = response;
        console.log(this.response);
      })
  }
}
