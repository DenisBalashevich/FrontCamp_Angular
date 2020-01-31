import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NewsEmitService } from "src/app/services/news-emit.service";
import { Source } from "src/app/models/source";
import { NewsApiService } from "src/app/services/news-api.service";
import { Filter } from "src/app/models/filter";

@Component({
  selector: "app-news-filtering-panel",
  templateUrl: "./news-filtering-panel.component.html",
  styleUrls: ["./news-filtering-panel.component.scss"]
})
export class NewsFilteringPanelComponent implements OnInit {
  sources: Source[];
  selectedSource: Source = null;
  filterText: string = "";
  onlyCreatedByMe: boolean = false;

  constructor(
    private newsEmitService: NewsEmitService,
    private newsApiService: NewsApiService
  ) {}

  ngOnInit() {
    this.newsApiService.getSources().subscribe(sources => {
      this.sources = sources;
    });
  }

  isfilterTextEnabled() {
    return !this.selectedSource && !this.onlyCreatedByMe;
  }

  onSearchClick() {
    this.updateData();
  }

  onlyCreatedByMeChanged() {
    this.updateData();
  }

  selectSourceChangeHandler(selectedSource: Source) {
    this.selectedSource = selectedSource;
    this.updateData();
  }

  updateData() {
    this.clearFiltering();
    this.loadNews();
  }

  clearFiltering() {
    this.newsEmitService.clearFilter();
  }

  loadNews() {
    let filter = new Filter({
      source:
        this.selectedSource && this.onlyCreatedByMe !== true
          ? this.selectedSource.id.toString()
          : null,
      criteriaSearch: this.filterText,
      loadLocal: this.onlyCreatedByMe
    });

    this.newsEmitService.loadNews(filter);
  }
}
