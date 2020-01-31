import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Source } from "../models/source";
import { News } from "../models/news";
import { Filter } from "../models/filter";

@Injectable()
export class NewsApiService {
  private static API_URL = "https://newsapi.org/v2";

  private authHeaders = new HttpHeaders({
    "X-Api-Key": "5005357ce12043f1b3fe967be55c8086"
  });

  constructor(private http: HttpClient) {}

  getSources(): Observable<Source[]> {
    const httpOptions = { headers: this.authHeaders };
    return this.http
      .get(`${NewsApiService.API_URL}/sources`, httpOptions)
      .pipe<Source[]>(
        map((response: any) => {
          return response.sources.map(
            (source: Source) =>
              new Source({
                id: source.id,
                name: source.name
              })
          );
        })
      );
  }

  getNews(filter: Filter): Observable<News[]> {
    const httpOptions = this.createOptions(filter);
    return this.http
      .get(`${NewsApiService.API_URL}/top-headlines`, httpOptions)
      .pipe<News[]>(
        map((response: any) => {
          return response.articles.map(
            (article: any) =>
              new News({
                url: article.url,
                source: new Source(article.source),
                heading: article.title,
                shortDescription: article.description,
                content: article.content,
                date: article.publishedAt,
                image: article.urlToImage === "null" ? null : article.urlToImage,
                author: article.author,
                sourceUrl: article.url,
              })
          );
        })
      );
  }

  private createOptions(filter: Filter) {
    let params = new HttpParams();
    if (filter) {
      params = params
        .set("sources", filter.source)
        .set("q", filter.criteriaSearch)
        .set("page", filter.pageNumber)
        .set("pageSize", filter.pageSize);
    }
    return { headers: this.authHeaders, params };
  }
}
