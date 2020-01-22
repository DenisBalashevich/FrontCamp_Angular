import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFilteringPanelComponent } from './news-filtering-panel.component';

describe('NewsFilteringPanelComponent', () => {
  let component: NewsFilteringPanelComponent;
  let fixture: ComponentFixture<NewsFilteringPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFilteringPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFilteringPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
