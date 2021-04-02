export class Post {
  public id: string;
  public commented_by: string;
  public content: string;
  public image_post: string;
  public created: string;

  constructor(id: string, commented_by: string, content: string, image_post: string, created: string) {
    this.id = id;
    this.commented_by = commented_by;
    this.content = content;
    this.image_post = image_post;
    this.created = created;
  }
}
