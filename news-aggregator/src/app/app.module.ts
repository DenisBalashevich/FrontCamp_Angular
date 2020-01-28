import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddNewsItemComponent } from "./components/add-news-item/add-news-item.component";
import { ErrorComponent } from "./components/error/error.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainViewComponent } from "./components/main-view/main-view.component";
import { NewsItemComponent } from "./components/news-item/news-item.component";
import { NewsItemDetailsComponent } from "./components/news-item-details/news-item-details.component";

import { SourceService } from "./services/source.service";
import { NewsEmitService } from "./services/news-emit.service";
import { NewsService } from "./services/news.service";
import { NewsFilteringPanelComponent } from './components/news-filtering-panel/news-filtering-panel.component';
import { NewsSourceComponent } from './components/news-source/news-source.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewsItemComponent,
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
    MainViewComponent,
    NewsItemComponent,
    NewsItemDetailsComponent,
    NewsFilteringPanelComponent,
    NewsSourceComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [NewsEmitService, NewsService, SourceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
