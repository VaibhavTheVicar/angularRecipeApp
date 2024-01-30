export class Todo {

  constructor(sno: number, title: string, description: string) {
    this.description = description;
    this.title = title;
    this.sno = sno;
  }

  sno: number;
  title: string;
  description: string;

}
