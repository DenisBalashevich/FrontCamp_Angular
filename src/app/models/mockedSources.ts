import { Source } from "./source";
import { mockedNews } from "./mockedNews";

export const sources: Source[] = [         
    new Source({ name: "BBC", news: mockedNews }),
    new Source({ name: "CNN", news: mockedNews })
  ];