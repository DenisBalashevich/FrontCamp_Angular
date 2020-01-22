import { News } from "./news";

export class Source {
  id: number;
  name: String;
  news: News[];

  public constructor(init?: Partial<Source>) {
    Object.assign(this, init);
  }
}
