import { mockedNews } from "../models/mockedNews";
import { sources } from "../models/mockedSources";
import { Source } from "../models/source";
import { Filter } from "../models/filter";
import { News } from "../models/news";
import { of } from 'rxjs';


export class NewsService {
  private news: News[];

  constructor() {
    this.news = mockedNews;
  }

  getRandomInt() {
    return Math.floor(Math.random() * Math.floor(100000));
  }

  add(article: News) {
    article.id =  this.getRandomInt().toString();
    this.news.push(article);
  }

  update(item: News) {
    const index = this.news.findIndex(article => article.id === item.id);
    if (index !== -1) {
      this.news[index] = item;
    }
  }

  delete(id: String) {
    const index = this.news.findIndex(item => item.id === id);
    if (index !== -1) {
      this.news.splice(index, 1);
    }
  }

  getNewsItem(id: String) {
    return this.news.find(newsItem => newsItem.id === id);
  }

  getNews(filter: Filter)  {
    let news: News[] = [];
    if (filter.criteriaSearch !== "") {
      news = this.news.filter(source =>
        source.heading.includes(filter.criteriaSearch)
      );
    } else {
      news = this.news;
    }
    
    news = news.slice((+filter.pageNumber-1) * +filter.pageSize, +filter.pageNumber * +filter.pageSize);

    return of(news);
  }

  getSources(): Source[] {
    return sources;
  }
}
