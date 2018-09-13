import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  albumList: any[];

  constructor(private _http: HttpClient) { }


  getMusicGalery(){
    let _url =`https://itunes.apple.com/us/rss/topalbums/limit=100/json`
    return this._http.get(_url)
    .subscribe(
      (data: any[]) => {
          this.albumList = data;
          console.log(this.albumList);
      } 
    )
  }

}
