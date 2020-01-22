import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsItemComponent} from './news-item.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NewsItemComponent
    ],
    exports: [
        NewsItemComponent
    ]
})
export class NewsItemModule {}
