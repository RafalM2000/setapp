import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from '../search/search.component';
import { DetailsComponent } from './details.component';
import { MusicService } from '../music.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SearchComponent,
        DetailsComponent ],
        imports: [
          FormsModule,
          ReactiveFormsModule,
          HttpClientModule
        ],
        providers: [
           MusicService, 
       ]
    })
    .compileComponents();
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.album.name = '';
   });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should render title in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(DetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Title:');
  }));

});
