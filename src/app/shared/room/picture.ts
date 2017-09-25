export class Picture {
  constructor(
    private url: string,
    private alt: string,
    private title?: string
  ) {
    if (!title) {
      this.title = this.alt;
    }
  }

  getURL(): string {
    return this.url;
  }

  getAlt(): string {
    return this.alt;
  }

  getTitle(): string {
    return this.title;
  }

  getGallery(): Object {
    return {
      small: this.url,
      medium: this.url,
      big: this.url
    };
  }
}
