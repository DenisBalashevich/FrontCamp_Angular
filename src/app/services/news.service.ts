import { mockedNews } from "../models/mockedNews";

export class NewsService {
  getNewsItem(id: String) {
    return mockedNews.find(newsItem => newsItem.id === id);
  }
}
