import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './components/main-view/main-view.component';
import { AddNewsItemComponent } from './components/add-news-item/add-news-item.component';
import { NewsItemDetailsComponent } from './components/news-item-details/news-item-details.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: "", component: MainViewComponent },
  { path: "add", component: AddNewsItemComponent },
  { path: "edit/:id", component: AddNewsItemComponent },
  { path: "details/:id", component: NewsItemDetailsComponent },
  { path: "404", component: ErrorComponent },
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
