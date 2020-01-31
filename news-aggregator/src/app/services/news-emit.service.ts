import { Injectable, Output, EventEmitter } from "@angular/core";
import { News } from "../models/news";
import { Filter } from "../models/filter";
import { NewsService } from "./news.service";

@Injectable()
export class NewsEmitService {
  constructor() {}

  @Output() onLoadNews: EventEmitter<Filter> = new EventEmitter();
  @Output() onClearFilter = new EventEmitter();

  loadNews(filter: Filter) {
    this.onLoadNews.emit(filter);
  }

  clearFilter() {
    this.onClearFilter.emit();
  }
}
