import { User } from "src/app/auth/user.model";

export class Image {
  public id: string;
  public owner: User;
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(id: string, name: string, desc: string, imagePath: string,owner:User) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.owner = owner;
  }
}
