import { Component } from "@angular/core";
import { News } from "../../models/news";
import {NewsEmitService} from '../../services/news-emit.service';

@Component({
  selector: "main-view",
  templateUrl: "./main-view.component.html"
})
export class MainViewComponent {
    news: News[];
    
    constructor(
        private newsEmitService: NewsEmitService
      ) { }
    
      ngOnInit() {
        this.newsEmitService.change.subscribe((news: News[]) => {
          this.news = news;
        });
      }
}
