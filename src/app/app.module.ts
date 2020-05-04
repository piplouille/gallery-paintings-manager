import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PaintingComponent } from './painting/painting.component';
import { AuthorComponent } from './author/author.component';
import { AuthorDetailComponent } from './authors/author-detail/author-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    PaintingsComponent,
    StatisticsComponent,
    HomeComponent,
    PaintingComponent,
    AuthorComponent,
    AuthorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
