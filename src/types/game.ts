export type Game = {
    createdAt: string;
    id: string;
    title: string;
    publisher: string;
    yearPublished: string;
    description: string;
    favourite: boolean;
    slug: string;
    tags: string[];
    heroCarousel: boolean;
    thumbnail: {
      url: string;
    };
    banner: {
      url: string;
    };
  };