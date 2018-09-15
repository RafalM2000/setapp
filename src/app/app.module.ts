import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { MusicService } from './music.service';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ MusicService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
