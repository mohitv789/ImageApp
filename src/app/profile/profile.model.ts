export class Profile {
  public user: string;
  public email: string;
  public first_name: string;
  public last_name: string;
  public phone_number: string;
  public age: string;
  public gender: string;

  constructor(user: string, email: string, first_name: string, last_name: string, phone_number: string, age: string, gender: string) {
    this.user = user;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone_number = phone_number;
    this.age = age;
    this.gender = gender;
  }
}
