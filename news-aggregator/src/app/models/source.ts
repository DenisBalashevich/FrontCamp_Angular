import { News } from "./news";

export class Source {
  id: String;
  name: String;
  news: News[];

  public constructor(init?: Partial<Source>) {
    Object.assign(this, init);
  }
}
