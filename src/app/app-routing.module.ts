import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AuthorDetailComponent } from './authors/author-detail/author-detail.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"authors", component: AuthorsComponent},
  {path:"paintings", component: PaintingsComponent},
  {path: "statistics", component: StatisticsComponent},
  {path: "authors/:id", component: AuthorDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
