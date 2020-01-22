import { Component, Input } from "@angular/core";
import { News } from "../models/news";
import { ActivatedRoute, Router } from "@angular/router";
import { NewsService } from "../services/news.service";

@Component({
  selector: "news-item-details",
  templateUrl: "./news-item-details.component.html"
})
export class NewsItemDetailsComponent {
  newsItem: News;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.newsItem = this.newsService.getNewsItem(params.id);
      if (!this.newsItem) {
      //  this.router.navigate(["news"]);
      }
    });
  }
}
