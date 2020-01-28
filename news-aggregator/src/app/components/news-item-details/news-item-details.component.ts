import { Component, Input } from "@angular/core";
import { News } from "../../models/news";
import { ActivatedRoute, Router } from "@angular/router";
import { NewsService } from "../../services/news.service";
import { Source } from 'src/app/models/source';
import { SourceService } from 'src/app/services/source.service';

@Component({
  selector: "news-item-details",
  templateUrl: "./news-item-details.component.html",
  styleUrls: ['./news-item-details.component.scss']
})
export class NewsItemDetailsComponent {
  newsItem: News;
  source: Source;
  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService,
    private sourceService: SourceService,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.newsItem = this.newsService.getNewsItem(params.id);
      this.source = this.sourceService.getSource(params.source);
    });

    this.activatedRoute.queryParams.subscribe(params => {
      debugger;
      this.source = this.sourceService.getSource(params.source);
    });

  }
}
