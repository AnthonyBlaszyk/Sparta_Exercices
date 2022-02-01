// Code the class here.
class Tree {
  age: number;
  height: number;
  alive: boolean = true;

  constructor(age: number) {
    this.age = age;
    this.height = this.updateHeight();
  }

  updateHeight(): number {
    if (this.age <= 9) {
      return this.age * 25;
    } else if (this.age <= 20) {
      return 9 * 25 + (this.age - 9) * 10;
    } else {
      return 9 * 25 + 11 * 10;
    }
  }

  seed(): void {
    this.age = 0;
    this.height = 0;
    this.alive = true;
  }
}

// Leave the line below for tests to work properly.
export { Tree };
