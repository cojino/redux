export class Task {
  constructor(id = 0, title = "", isCompleted = false) {
    this.id = id;
    this.title = title;
    this.isCompleted = isCompleted;
  }
}
