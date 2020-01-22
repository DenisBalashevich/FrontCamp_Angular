export class News {
  id: String;
  heading: String;
  shortDescription: String;
  content: String;
  image: String;
  date: String;
  author: String;
  sourceUrl: String;

  public constructor(init?: Partial<News>) {
    Object.assign(this, init);
  }
}
