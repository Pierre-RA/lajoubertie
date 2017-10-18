export class Price {
  constructor(
    private value: number,
    private nights: number,
    private weekPrice: number
  ) {}

  getValue(): number {
    return this.value;
  }

  getNights(): number {
    return this.nights;
  }

  getWeekPrice(): number {
    return this.weekPrice;
  }

  getWeekNights(): Object {
    return {value: '7', plural: 's'};
  }

  getNightsSuffix(): Object {
    return this.nights > 1 ? {value: this.nights + ' ', plural: 's'} : {value: '', plural: ''};
  }

  getSingularNights(): Object {
    return {value: '', plural: ''};
  }
}
