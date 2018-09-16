import { Component, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchTitle = new EventEmitter();
  @Output() searchArtist = new EventEmitter();

  searchBox = new FormGroup ({
    title: new FormControl(),
    artist: new FormControl()
  })

  constructor() { }

  ngOnInit() {}

  emitTitle(term: string): void {
     return this.searchTitle.emit(term);
  }
  emitArtist(term: string): void {
    return this.searchArtist.emit(term);
 }

}
