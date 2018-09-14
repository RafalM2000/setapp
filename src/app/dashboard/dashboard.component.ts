import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  musicAlbums: any;

  constructor( private _music: MusicService ) { }

  ngOnInit() {
    this._music.getMusicGalery().then(
      (val) => console.log(this._music.albumList.feed.entry),
      (err) => console.log(err),
    )
    
  }

}
