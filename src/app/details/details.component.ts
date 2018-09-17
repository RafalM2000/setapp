import { Component, OnInit, Input} from '@angular/core';
import { Album } from '../album';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

@Input() album: Album;

  constructor() { }

  ngOnInit() {
    this.album.name = "not selected";
    this.album.artist = "...";
    this.album.price = "...";   

  }
}
