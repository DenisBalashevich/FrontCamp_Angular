import { Source } from "./source";
import { mockedNews } from "./mockedNews";

export const sources: Source[] = [
  new Source({ id: "1", name: "BBC", news: mockedNews }),
  new Source({ id: "2", name: "CNN", news: mockedNews })
];
