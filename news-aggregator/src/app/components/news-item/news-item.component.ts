import { Component, Input } from "@angular/core";
import { News } from "../../models/news";
import { Source } from "src/app/models/source";

@Component({
  selector: "news-item",
  templateUrl: "./news-item.component.html",
  styleUrls: ["./news-item.component.scss"]
})
export class NewsItemComponent{
  @Input() newsItem: News;
  @Input() source: Source;
  @Input() onDeleteNewsItem: (id: String) => void;

  removeItemHandler() {
    this.onDeleteNewsItem(this.newsItem.id);
  }
}
