import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
  oranges: string[] = [];

  growOranges(): void {
    this.oranges = [];
    if (this.age >= 5 && this.age <= 10) {
      for (let i = 0; i < 10; i++) {
        this.oranges.push("🍊");
      }
    } else if (this.age > 5 && this.age <= 20) {
      for (let i = 0; i < 20; i++) {
        this.oranges.push("🍊");
      }
    } else if (this.age > 5 && this.age <= 40) {
      for (let i = 0; i < 5; i++) {
        this.oranges.push("🍊");
      }
    }
  }

  pickAnOrange(): void {
    this.oranges.pop();
  }

  isAlive(): boolean {
    const randomNumber = Math.floor(Math.random() * 100);
    if (this.age >= randomNumber && this.age > 50) {
      return false;
    } else return true;
  }

  ageOneYear(): void {
    this.age++;
    this.height = this.updateHeight();
    this.growOranges();
    this.alive = this.isAlive();
  }
}

// Leave the line below for tests to work properly.
export { OrangeTree };
