import { Price } from './price';
import { Picture } from './picture';

export class Room {
  constructor(
    private people: number,
    private rooms: number,
    private bathrooms: number,
    private title: string,
    private description: string,
    private price: Price,
    private pictures: Array<Picture>
  ) {}

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

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getPrice(): Price {
    return this.price;
  }

  getPictures(): Array<Picture> {
    return this.pictures;
  }
}
