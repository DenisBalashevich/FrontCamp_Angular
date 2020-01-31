import { Source } from './source';

export class News {
  id: String;
  heading: String;
  shortDescription: String;
  content: String;
  image: String;
  date: Date;
  author: String;
  source: Source;
  sourceUrl: String;
  isLocal: boolean;

  public constructor(init?: Partial<News>) {
    Object.assign(this, init);
  }
  
}
