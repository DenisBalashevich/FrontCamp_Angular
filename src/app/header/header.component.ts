import { Component } from "@angular/core";
import { News } from "../models/news";
import { sources } from "../models/mockedSources";
import { HeaderService } from "./header.service";
import { Source } from "../models/source";

@Component({
  selector: "header-element",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  sources = sources;
  selectedSource: Source = null;
  filterText: String;

  constructor(private headerService: HeaderService) {}

  onChangeHadler(t: any) {
    let news: News[] = [];
    if (t !== "") {
        news = this.selectedSource.news.filter(source =>
        source.heading.includes(t)
      );
    } else {
        news = this.selectedSource.news;
    }
    this.headerService.setNews(news);
  }

  selectSourceChangeHandler(event: any) {
    this.selectedSource = event;
    this.headerService.setNews(this.selectedSource.news);
  }
}
