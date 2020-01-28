import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NewsService } from "../../services/news.service";
import { News } from "../../models/news";
import { FormGroup } from "@angular/forms";
import { Source } from "src/app/models/source";

@Component({
  selector: "add-news-item",
  templateUrl: "./add-news-item.component.html",
  styleUrls: ["./add-news-item.component.scss"]
})
export class AddNewsItemComponent {
  newsItem: News;
  source: Source;
  pageHeader: String;

  public editNewsForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService,
    private router: Router
  ) {}

  goBack() {
    this.router.navigate(["/"]);
  }

  save() {
    console.log('model saved');
    this.goBack();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id === undefined) {
        this.pageHeader = "Add News";
        this.newsItem = new News();
      } else {
        this.newsItem = this.newsService.getNewsItem(params.id);
        this.pageHeader = "Edit News";
      }
    });
  }
}
