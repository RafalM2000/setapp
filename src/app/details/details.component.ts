import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

@Input() album: any;

  constructor() { }

  ngOnInit() {
    this.album.name = "not selected";
    this.album.artist = "not selected";
    this.album.price = "not selected";

  }

  ngOnChanges() {
    console.log(this.album);
  }

}
