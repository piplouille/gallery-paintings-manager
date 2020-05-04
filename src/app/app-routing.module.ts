import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AuthorDetailComponent } from './authors/author-detail/author-detail.component';
import { AddPaintingComponent } from './paintings/add-painting/add-painting.component';
import { AddAuthorComponent } from './authors/add-author/add-author.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"authors", component: AuthorsComponent},
  {path:"paintings", component: PaintingsComponent},
  {path: "statistics", component: StatisticsComponent},
  {path: "authors/:id", component: AuthorDetailComponent},
  {path: "add-painting", component: AddPaintingComponent},
  {path: "add-author", component: AddAuthorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
