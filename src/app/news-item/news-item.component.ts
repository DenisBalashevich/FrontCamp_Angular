import {Component, Input} from '@angular/core';
import { News } from '../models/news';

@Component({
    selector: 'news-item',
    templateUrl: './news-item.component.html',
})
export class NewsItemComponent {
    @Input() newsItem: News;
}
