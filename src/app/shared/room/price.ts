export class Price {
  constructor(
    private value: number,
    private nights: number
  ) {}

  getValue(): number {
    return this.value;
  }

  getNights(): number {
    return this.nights;
  }

  getNightsSuffix(): Object {
    return this.nights > 1 ? {value: this.nights + ' ', plural: 's'} : {value: '', plural: ''};
  }
}
