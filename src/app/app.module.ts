import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';

import { HttpClientModule } from '@angular/common/http';
import { MusicService } from './music.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ MusicService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
