import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  albumCollection= [];
  searchTitle: string;
  searchArtist: string;

  constructor( private _music: MusicService ) { }

  ngOnInit() {
    this._music.getMusicGalery().then(
      (val) => {
                this.createAlbumCollection(this._music.albumList.feed.entry)
              },
      (err) => console.log(err),
    )    
  }

  createAlbumCollection(data) {  
    for (let i=0; i < data.length; i++) {
      this.albumCollection.push(
        {name: data[i]['im:name'].label,
        artist: data[i]['im:artist'].label,
        url: data[i]['im:image'][2].label,
        price: data[i]['im:price'].label}
      ) 
    }
    console.log(this.albumCollection)
  }

  getTitle(data) {
    this.searchTitle = data;
  }

  getArtist(data) {
    console.log(data);
    this.searchArtist = data;
  }

}
