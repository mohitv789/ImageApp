import { Image } from "../images/image.model";

export class Album {
  public id: string;
  public title: string;
  public owner: string;
  public images: Image[];
  public published_on: string;

  constructor(id: string,title: string, owner: string, images: Image[], published_on: string) {
    this.id = id;
    this.title = title;
    this.owner = owner;
    this.images = images;
    this.published_on = published_on;
  }
}
