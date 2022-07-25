export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Item {
  resourceURI: string;
  name: string;
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Image {
  resourceURI: string;
  name: string;
}

export interface Series {
  available: number;
  collectionURI: string;
  items: Image[];
  returned: number;
}

export interface StorieItems {
  resourceURI: string;
  name: string;
  type: string;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: StorieItems[];
  returned: number;
}

export interface SeriesItems {
  resourceURI: string;
  name: string;
}

export interface Events {
  available: number;
  collectionURI: string;
  items: SeriesItems[];
  returned: number;
}

export interface Url {
  type: string;
  url: string;
}

export interface Price {
  printPrice: string;
  digitalPurchasePrice: string;
}

export interface Comic {
  id: string
  title: string;
  description: string;
  thumbnail: Thumbnail;
  prices: Price;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Series;
  stories: Stories;
  events: Events;
  urls: Url[];
}

export interface Data {
  data: {
    count: number;
    offset: number;
    limit: number;
    results: Character[];
    total: number;
  };
}
