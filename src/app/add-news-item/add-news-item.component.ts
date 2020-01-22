import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NewsService } from "../services/news.service";
import { News } from "../models/news";

@Component({
  selector: "add-news-item",
  templateUrl: "./add-news-item.component.html"
})
export class AddNewsItemComponent {
  public newsItem: News;

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService,
    private router: Router
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
