import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-source',
  templateUrl: './news-source.component.html',
  styleUrls: ['./news-source.component.scss']
})
export class NewsSourceComponent {
  @Input() source: string;
  constructor(){
    console.log(this.source);
  }
}
