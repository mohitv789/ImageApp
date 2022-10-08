export class Album {
  public id: string;
  public title: string;
  public published_on: string;

  constructor(id: string,title: string, published_on: string) {
    this.id = id;
    this.title = title;
    this.published_on = published_on;
  }
}
