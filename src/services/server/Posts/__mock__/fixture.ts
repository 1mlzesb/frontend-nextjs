import { getPagination } from "@/lib/util/pagination";
import { GetPostsReturn } from "../";

export const getPostsData: GetPostsReturn = {
  posts: [
    {
      id: 1,
      title: "Frontend Testing Example",
      description: "post example text.",
      body: "post example text.",
      imageUrl: "/__mocks__/images/img01.jpg",
      published: true,
      authorId: 1,
      likeCount: 1,
      authorName: "Bae Eonsu",
    },
    {
      id: 2,
      title: "Frontend Testing Example",
      description: "post example text.",
      body: "post example text.",
      imageUrl: "/__mocks__/images/img02.jpg",
      published: true,
      authorId: 1,
      likeCount: 1,
      authorName: "Bae Eonsu",
    },
    {
      id: 3,
      title: "Frontend Testing Example",
      description: "post example text.",
      body: "post example text.",
      imageUrl: "/__mocks__/images/img03.jpg",
      published: false,
      authorId: 1,
      likeCount: 1,
      authorName: "Bae Eonsu",
    },
    {
      id: 4,
      title: "Frontend Testing Example",
      description: "post example text.",
      body: "post example text.",
      imageUrl: "/__mocks__/images/img04.jpg",
      published: true,
      authorId: 1,
      likeCount: 1,
      authorName: "Bae Eonsu",
    },
    {
      id: 5,
      title: "Frontend Testing Example",
      description: "post example text.",
      body: "post example text.",
      imageUrl: "/__mocks__/images/img05.jpg",
      published: true,
      authorId: 1,
      likeCount: 1,
      authorName: "Bae Eonsu",
    },
    {
      id: 6,
      title: "Frontend Testing Example",
      description: "post example text.",
      body: "post example text.",
      imageUrl: "/__mocks__/images/img06.jpg",
      published: true,
      authorId: 1,
      likeCount: 1,
      authorName: "Bae Eonsu",
    },
    {
      id: 7,
      title: "Frontend Testing Example",
      description: "post example text.",
      body: "post example text.",
      imageUrl: "/__mocks__/images/img07.jpg",
      published: true,
      authorId: 1,
      likeCount: 1,
      authorName: "Bae Eonsu",
    },
  ],
  ...getPagination({
    take: 9,
    skip: 0,
    currentPage: 1,
    hitCount: 100,
  }),
};

export const getPostsEmptyData: GetPostsReturn = {
  posts: [],
  pagination: null,
  paginationInfo: { start: 0, end: 0, hitCount: 0 },
};
