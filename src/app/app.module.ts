import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MainViewComponent } from "./main-view/main-view.component";
import { NotFoundComponent } from "./error/not-found.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterElementComponent } from "./footer/footer.component";
import { ContactComponent } from "./contact/contact.component";
import { HeaderService } from "./header/header.service";
import { NewsItemComponent } from "./news-item/news-item.component";
import { AddNewsItemComponent } from "./add-news-item/add-news-item.component";
import { NewsService } from "./services/news.service";
import { NewsItemDetailsComponent } from "./news-item-details/news-item-details.component";

const appRoutes: Routes = [
  { path: "", component: MainViewComponent },
  { path: "add", component: AddNewsItemComponent },
  { path: "edit/:id", component: AddNewsItemComponent },
  { path: "details/:id", component: NewsItemDetailsComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MainViewComponent,
    NotFoundComponent,
    SidebarComponent,
    FooterElementComponent,
    ContactComponent,
    NewsItemComponent,
    AddNewsItemComponent,
    NewsItemDetailsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [HeaderService, NewsService]
})
export class AppModule {}
