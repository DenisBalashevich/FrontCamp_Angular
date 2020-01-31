import { News } from './news';

export const mockedNews: News[] = [
  new News({
    id: '1',
    heading: 'Heading1',
    author: 'author1',
    content: 'content1',
    date: new Date(Date.now()),
    shortDescription: 'shortDescription1',
    image: 'https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg',
    isLocal: true
  }),
  new News({
    id: '2',
    heading: 'Heading2',
    author: 'author2',
    content: 'content2',
    date: new Date(Date.now()),
    shortDescription: 'shortDescription2',
    image: 'https://images.theconversation.com/files/280024/original/file-20190618-118505-aag3r7.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip',
    isLocal: true
  }),
  new News({
    id: '3',
    heading: 'Heading3',
    author: 'author3',
    content: 'content3',
    date: new Date(Date.now()),
    shortDescription: 'shortDescription3',
    image: 'https://simple-fauna.ru/wp-content/uploads/2018/01/zhiraf.jpg',
    isLocal: true
  }),
  new News({
    id: '4',
    heading: 'Heading4',
    author: 'author4',
    content: 'content4',
    date: new Date(Date.now()),
    shortDescription: 'shortDescription4',
    image: 'http://www.rus-zona.net/wp-content/uploads/dikiejivotnie/zebra_1.jpg',
    isLocal: true
  }),
  new News({
    id: '5',
    heading: 'Heading5',
    author: 'author5',
    content: 'content5',
    date: new Date(Date.now()),
    shortDescription: 'shortDescription5',
    image: 'https://i.pinimg.com/originals/c7/84/fc/c784fc31094d844f598a047492908213.jpg',
    isLocal: true
  })
];
