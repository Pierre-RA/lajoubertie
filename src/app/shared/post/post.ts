export class Post {
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  categories: Array<number>;
  id: number;
  slug: string;
  acf: {
    bathrooms: string;
    description_EN: string;
    excerpt_EN: string;
    minimum_nights: string;
    people: string;
    price: string;
    rooms: string;
    title_EN: string;
    week_price: string;
    image_1: {
      alt: string;
      title: string;
      url: string;
      sizes: {
        large: string;
        'medium_large': string;
        medium: string;
        thumbnail: string;
      };
    };

  };
}
