import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  serviceActive: boolean = false;

  constructor( private music: MusicService ) { }

  ngOnInit() {
    this.serviceActive =  this.music.serviceTest;
  }

}
