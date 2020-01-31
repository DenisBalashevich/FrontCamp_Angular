import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  Type
} from "@angular/core";
import { News } from "../../models/news";
import { NewsEmitService } from "../../services/news-emit.service";
import { NewsItemComponent } from "../news-item/news-item.component";
import { Filter } from "src/app/models/filter";
import { NewsService } from "src/app/services/news.service";
import { NewsApiService } from "src/app/services/news-api.service";

@Component({
  selector: "main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"]
})
export class MainViewComponent {
  @ViewChild("container", { read: ViewContainerRef, static: false })
  container: ViewContainerRef;
  news: News[] = [];
  pageNumber: number = 1;
  pageSize: number = 5;
  currentFiltering: Filter;

  constructor(
    private newsEmitService: NewsEmitService,
    private factoryResolver: ComponentFactoryResolver,
    private newsService: NewsService,
    private newsApiService: NewsApiService
  ) {}

  ngOnInit() {
    this.newsEmitService.onLoadNews.subscribe((filter: Filter) => {
      this.onLoadNews(filter);
    });

    this.newsEmitService.onClearFilter.subscribe(() => {
      this.onClearFilter();
    });
  }

  onClearFilter() {
    this.pageNumber = 1;
    this.news = [];
  }

  onLoadNews(filter: Filter) {
    this.currentFiltering = filter;
    filter.pageNumber = this.pageNumber.toString();
    filter.pageSize = this.pageSize.toString();

    let service = filter.loadLocal ? this.newsService : this.newsApiService;
    service.getNews(filter).subscribe(news => {
      this.news = this.news.concat(news);
      this.loadComponent(NewsItemComponent, this.news);
    });
  }

  loadMoreHandler() {
    this.pageNumber++;
    this.onLoadNews(this.currentFiltering);
  }

  onDeleteNewsItem = (id: String) => {
    this.newsService.delete(id);
    this.news = [];
    this.onLoadNews(this.currentFiltering);
  };

  private loadComponent(type: Type<NewsItemComponent>, news: News[]): void {
    const componentFactory = this.factoryResolver.resolveComponentFactory(type);
    this.container.clear();
    news.map(item => {
      const componentRef = this.container.createComponent(componentFactory);
      const inst = <NewsItemComponent>componentRef.instance;
      inst.newsItem = item;
      inst.onDeleteNewsItem = this.onDeleteNewsItem;
    });
  }
}
