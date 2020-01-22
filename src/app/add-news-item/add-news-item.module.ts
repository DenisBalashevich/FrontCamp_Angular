import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddNewsItemComponent} from './add-news-item.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AddNewsItemComponent
    ],
    exports: [
        AddNewsItemComponent
    ]
})
export class AddNewsItemModule {}
