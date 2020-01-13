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
const appRoutes: Routes = [
  { path: "", component: MainViewComponent },
  { path: "contact", component: ContactComponent },
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
    ContactComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
