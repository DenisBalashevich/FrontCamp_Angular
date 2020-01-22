import { Component, OnInit } from "@angular/core";
import { NewsEmitService } from "src/app/services/news-emit.service";
import { Source } from "src/app/models/source";
import { News } from "src/app/models/news";
import { sources } from "../../models/mockedSources";

@Component({
  selector: "app-news-filtering-panel",
  templateUrl: "./news-filtering-panel.component.html",
  styleUrls: ["./news-filtering-panel.component.scss"]
})
export class NewsFilteringPanelComponent {
  sources = sources;
  selectedSource: Source = null;
  filterText: String;
  onlyCreatedByMe: boolean = false;

  constructor(private newsEmitService: NewsEmitService) {}

  isfilterTextEnabled() {
    return this.selectedSource === null;
  }

  onChangeHadler(filterText: any) {
    let news: News[] = [];
    if (filterText !== "") {
      news = this.selectedSource.news.filter(source =>
        source.heading.includes(filterText)
      );
    } else {
      news = this.selectedSource.news;
    }
    this.newsEmitService.setNews(news);
  }

  onlyCreatedByMeChanged(enabled) {
    if (enabled) {
      this.newsEmitService.setNews([]);
    }
  }

  selectSourceChangeHandler(event: any) {
    this.selectedSource = event;
    this.selectedSource.news.forEach(element => {
      element.source = this.selectedSource;
    });
    this.newsEmitService.setNews(this.selectedSource.news);
  }
}
