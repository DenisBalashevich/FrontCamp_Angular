import { News } from "./news";

export const mockedNews: News[] = [
  new News({
    id: '1',
    heading: "Heading1",
    author: "author1",
    content: "content1",
    date: Date.now.toString(),
    shortDescription: "shortDescription1"
  }),
  new News({
    id: '2',
    heading: "Heading2",
    author: "author2",
    content: "content2",
    date: Date.now.toString(),
    shortDescription: "shortDescription2"
  }),
  new News({
    id: '3',
    heading: "Heading3",
    author: "author3",
    content: "content3",
    date: Date.now.toString(),
    shortDescription: "shortDescription3"
  }),
  new News({
    id: '4',
    heading: "Heading4",
    author: "author4",
    content: "content4",
    date: Date.now.toString(),
    shortDescription: "shortDescription4"
  }),
  new News({
    id: '5',
    heading: "Heading5",
    author: "author5",
    content: "content5",
    date: Date.now.toString(),
    shortDescription: "shortDescription5"
  })
];
