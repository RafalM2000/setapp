import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from './album';

@Injectable()

export class MusicService {
  albumList: any;

  constructor(private _http: HttpClient) { }

  getMusicGalery() {
        let promise = new Promise((resolve, reject) => {
        let _url =`https://itunes.apple.com/us/rss/topalbums/limit=100/json`;
        return this._http.get(_url)
        .toPromise()
        .then(
        res => { // Success
          this.albumList = res;
          resolve();
          },
          msg => { // Error
          reject(msg);
          }
        );
    });
    return promise;
  }
}
