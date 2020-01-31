import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NewsService } from "../../services/news.service";
import { News } from "../../models/news";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Source } from "src/app/models/source";

@Component({
  selector: "add-news-item",
  templateUrl: "./add-news-item.component.html",
  styleUrls: ["./add-news-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewsItemComponent implements OnInit {
  newsItem: News;
  source: Source;
  pageHeader: String;
  editNewsForm: FormGroup;

  constructor(
    private newsService: NewsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  goBack() {
    this.router.navigate(["/"]);
  }

  save() {
    const formValue = this.editNewsForm.value;
    const newsItem = new News({
      id: this.newsItem.id,
      heading: formValue.heading,
      shortDescription: formValue.shortDescription,
      content: formValue.content,
      image: formValue.image,
      date: formValue.date,
      author: formValue.author,
      sourceUrl: formValue.sourceUrl,
      isLocal: true
    });

    if (newsItem.id) {
      this.newsService.update(newsItem);
    } else {
      this.newsService.add(newsItem);
    }

    this.router.navigate(["/"]);
    this.goBack();
  }

  get heading() {
    return this.editNewsForm.get("heading");
  }
  get content() {
    return this.editNewsForm.get("content");
  }
  get author() {
    return this.editNewsForm.get("author");
  }
  get date() {
    return this.editNewsForm.get("date");
  }
  get sourceUrl() {
    return this.editNewsForm.get("sourceUrl");
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    if (id === undefined) {
      this.pageHeader = "Add News";
      this.newsItem = new News();
    } else {
      this.newsItem = this.newsService.getNewsItem(id);
      this.pageHeader = "Edit News";
    }

    this.editNewsForm = new FormGroup({
      heading: new FormControl(this.newsItem.heading, [Validators.required]),
      shortDescription: new FormControl(this.newsItem.shortDescription),
      content: new FormControl(this.newsItem.content, [Validators.required]),
      date: new FormControl(this.newsItem.date),
      author: new FormControl(this.newsItem.author, [Validators.required]),
      image: new FormControl(this.newsItem.image),
      sourceUrl: new FormControl(this.newsItem.sourceUrl, [Validators.required])
    });
  }
}
