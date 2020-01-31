import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './news-source.component.html',
  styleUrls: ['./news-source.component.scss']
})
export class NewsSourceComponent {
  @Input() source: string;
}
