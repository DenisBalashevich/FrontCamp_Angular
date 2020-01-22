import { Injectable, Output, EventEmitter } from '@angular/core'
import { News } from '../models/news';

@Injectable()
export class HeaderService {

    news: News[] = [];

  @Output() change: EventEmitter<News[]> = new EventEmitter();

  setNews(news: News[]) {
    this.news = news;
    this.change.emit(this.news);
  }
}