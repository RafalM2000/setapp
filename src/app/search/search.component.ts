import { Component, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchTerms = new EventEmitter();

  searchBox = new FormGroup ({
    name: new FormControl()
  })

  constructor() { }

  ngOnInit() {}

  search(term: string): void {
    // if (term.length < 2) {
    //   return
    // }; 
    return this.searchTerms.emit(term);
  }

}
