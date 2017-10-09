import { Price } from './price';
import { Picture } from './picture';
import { Post } from '../post/post';

export class Room {
  private title: {
    en: string,
    fr: string
  };
  private description: {
    en: string,
    fr: string
  };

  constructor(
    private people: number,
    private rooms: number,
    private bathrooms: number,
    title: Array<string>,
    description: Array<string>,
    private price: Price,
    private pictures: Array<Picture>
  ) {
    this.title = {
      en: title[0],
      fr: title[1],
    };
    this.description = {
      en: description[0],
      fr: description[1],
    };
  }

  getPeople(): number {
    return this.people;
  }

  getPeopleSuffix(): Object {
    return this.people > 1 ? {plural: 's'} : {plural: ''};
  }

  getRooms(): number {
    return this.rooms;
  }

  getRoomsSuffix(): Object {
    return this.rooms > 1 ? {plural: 's'} : {plural: ''};
  }

  getBathrooms(): number {
    return this.bathrooms;
  }

  getBathroomsSuffix(): Object {
    return this.bathrooms > 1 ? {plural: 's'} : {plural: ''};
  }

  getTitle(lang: string): string {
    return this.title[lang];
  }

  getDescription(lang: string): string {
    return this.description[lang];
  }

  getPrice(): Price {
    return this.price;
  }

  getPictures(): Array<Picture> {
    return this.pictures;
  }

  setPictures(pictures: Array<Picture>): void {
    this.pictures = pictures;
  }

  addPicture(picture: Picture): void {
    this.pictures.push(picture);
  }
}
