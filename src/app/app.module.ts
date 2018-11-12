import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';



import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { SearchComponent } from './search/search.component';
import { IconBoxesComponent } from './icon-boxes/icon-boxes.component';
import { PopularComponent } from './popular/popular.component';
import { FollowComponent } from './follow/follow.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SliderComponent,
    SearchComponent,
    IconBoxesComponent,
    PopularComponent,
    FollowComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
