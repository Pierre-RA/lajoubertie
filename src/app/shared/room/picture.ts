export class Picture {
  constructor(
    private small: string,
    private medium: string,
    private large: string,
    private alt: string,
    private title?: string
  ) {
    if (!title) {
      this.title = this.alt;
    }
  }

  getSmallURL(): string {
    return this.small;
  }

  getMediumURL(): string {
    return this.medium;
  }

  getLargeURL(): string {
    return this.large;
  }

  getAlt(): string {
    return this.alt;
  }

  getTitle(): string {
    return this.title;
  }

  getGallery(): Object {
    return {
      small: this.small,
      medium: this.medium,
      big: this.large
    };
  }
}
