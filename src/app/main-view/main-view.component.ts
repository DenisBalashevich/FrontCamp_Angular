import { Component } from "@angular/core";
import { News } from "../models/news";
import {HeaderService} from '../header/header.service';

@Component({
  selector: "main-view",
  templateUrl: "./main-view.component.html"
})
export class MainViewComponent {
    news: News[];
    
    constructor(
        private headerService: HeaderService
      ) { }
    
      ngOnInit() {
        this.headerService.change.subscribe((news: News[]) => {
          this.news = news;
        });
      }
}
